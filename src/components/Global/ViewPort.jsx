import React, { useEffect, useState } from 'react'

const ViewPort = () => {
    const [viewPortSize, setViewPortSize] = useState(innerWidth)

    useEffect(() => {
        const handleResize = () => {
            setViewPortSize(window.innerWidth)
        }

        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return { viewPortSize }
}

export default ViewPort
