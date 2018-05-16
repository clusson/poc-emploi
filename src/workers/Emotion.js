
import io from 'socket.io-client'

console.log(process.env.SOCKETIO_COGNITIVE_URI)
const socket = io.connect(process.env.SOCKETIO_COGNITIVE_URI)

let initAngry = false

socket.on('message', res => {
    initAngry = res.mood
})

export const getEmotion = (pictureLink) => {
    const data = { b64Img: pictureLink }
    socket.emit('moodify', data)
}

export const isAngry = () => { return initAngry }
