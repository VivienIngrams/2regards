import { type SchemaTypeDefinition } from 'sanity'

import blockContent from './schemaTypes/blockContent'
import product from './schemaTypes/product'
import exhibition from './schemaTypes/exhibition'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [ exhibition, product, blockContent],
}
