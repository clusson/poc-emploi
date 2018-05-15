import env from 'common-env'

export const config = env().getOrElseAll({
  socketio: {
    uri: 'localhost:4444'
  }
})
