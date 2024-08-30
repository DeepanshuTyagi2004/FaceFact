"use client"

import { useState, ChangeEvent } from 'react'
import Image from 'next/image'
import ReactPlayer from 'react-player'

export default function Home() {
  const [files, setFiles] = useState<FileList | null>(null)

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    setFiles(files)
  }

  const isImage = (file: File): boolean => file.type.startsWith('image')

  const isVideo = (file: File): boolean => file.type.startsWith('video')

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Uploading and Displaying Media Files</h1>
      <input type="file" onChange={handleFileChange} multiple />
      <div className="flex flex-col items-center justify-center">
        {
          files && Array.from(files).map((file, index) => {
            return (
              <div key={index} className="flex flex-col items-center justify-center">
                <div className="flex flex-col items-center justify-center">
                  {isImage(file) && (
                    <Image src={URL.createObjectURL(file)} width={500} height={500} alt='Uploaded Media' />
                  )}
                  {isVideo(file) && (
                    <ReactPlayer url={URL.createObjectURL(file)} controls={true} />
                  )}
                </div>
              </div>
            )
          })
        }
      </div>
    </main>
  )
}