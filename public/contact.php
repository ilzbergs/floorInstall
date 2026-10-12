<?php
declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['message' => 'Pieprasījums nav atļauts.'], JSON_UNESCAPED_UNICODE);
    exit;
}

$payload = json_decode(file_get_contents('php://input') ?: '', true);
if (!is_array($payload)) {
    http_response_code(400);
    echo json_encode(['message' => 'Nederīgs formas pieprasījums.'], JSON_UNESCAPED_UNICODE);
    exit;
}

// Kluss lauks palīdz noraidīt vienkāršus automatizētus iesniegumus.
if (!empty($payload['website'])) {
    echo json_encode(['message' => 'Paldies!'], JSON_UNESCAPED_UNICODE);
    exit;
}

$name = trim((string) ($payload['name'] ?? ''));
$phone = trim((string) ($payload['phone'] ?? ''));
$email = trim((string) ($payload['email'] ?? ''));
$message = trim((string) ($payload['message'] ?? ''));

if ($name === '' || $phone === '' || $message === '') {
    http_response_code(422);
    echo json_encode(['message' => 'Lūdzu, aizpildiet vārdu, tālruni un ziņu.'], JSON_UNESCAPED_UNICODE);
    exit;
}

if (strlen($name) > 120 || strlen($phone) > 60 || strlen($email) > 160 || strlen($message) > 5000) {
    http_response_code(422);
    echo json_encode(['message' => 'Kāds no laukiem ir pārāk garš.'], JSON_UNESCAPED_UNICODE);
    exit;
}

if ($email !== '' && !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(422);
    echo json_encode(['message' => 'Lūdzu, pārbaudiet e-pasta adresi.'], JSON_UNESCAPED_UNICODE);
    exit;
}

$safeName = preg_replace('/[\r\n]+/', ' ', $name) ?: 'Vietnes apmeklētājs';
$subject = 'FloorInstall pieprasījums — ' . $safeName;
$body = "Vārds: {$name}\nTālrunis: {$phone}\nE-pasts: " . ($email !== '' ? $email : 'Nav norādīts') . "\n\nZiņa:\n{$message}\n";
$headers = [
    'From: info@floorinstall.lv',
    'Reply-To: ' . ($email !== '' ? $email : 'info@floorinstall.lv'),
    'Content-Type: text/plain; charset=UTF-8',
    'X-Mailer: FloorInstall contact form',
];

$recipients = 'info@floorinstall.lv, ilzbergs@inbox.lv';

if (!mail($recipients, $subject, $body, implode("\r\n", $headers))) {
    http_response_code(500);
    echo json_encode(['message' => 'Ziņu neizdevās nosūtīt. Lūdzu, rakstiet uz info@floorinstall.lv.'], JSON_UNESCAPED_UNICODE);
    exit;
}

echo json_encode(['message' => 'Ziņa nosūtīta.'], JSON_UNESCAPED_UNICODE);
