
import io from 'socket.io-client'

const socket = io.connect(process.env.SOCKETIO_COGNITIVE_URI)

let initAngry = false

socket.on('message', res => {
    initAngry = res.anger
})

export const getEmotion = (pictureLink) => {
    const data = { b64Img: pictureLink }
    socket.emit('moodify', data)
}

export const isAngry = () => { return initAngry }
