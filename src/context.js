// @flow
import type {Context as FusionContext} from 'fusion-core'

function createContext(fusionCtx: FusionContext) {
  // does not work (TypeError: Cannot read property 'has' of undefined)
  return {}

  // works
  return {...fusionCtx}

  // works
  return fusionCtx
}

export default createContext
