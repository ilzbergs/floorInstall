import type { ServiceTechnicalGuide } from '../../types/service'
import { parquetGuide } from './parquet'
import { vinylGuide } from './vinyl'

export const serviceGuides: Record<string, ServiceTechnicalGuide | undefined> = {
  'parketa-ieklasana': parquetGuide,
  'vinila-ieklasana': vinylGuide,
}

