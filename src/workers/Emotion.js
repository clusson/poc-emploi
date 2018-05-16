
import io from 'socket.io-client'

const socket = io.connect(process.env.SOCKETIO_COGNITIVE_URI)

let initAngry = false

socket.on('message', res => {
    initAngry = res.mood
})

export const getEmotion = (pictureLink) => {
    socket.emit('moodify', pictureLink)
}

export const isAngry = () => { return initAngry }
