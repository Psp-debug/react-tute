import React from 'react'
import { Editor } from "@tinymce/tinymce-react"
import { Controller } from "react-hook-form"

export default function RTE({ name, control, label, defaultValue = "" }) {
    return (
        <div className="w-full">
            {label && <label className="inline-block mb-1 pl-1"></label>}
            <Controller
            name={name || "content"}
            control={control}
            render={({field: {onChange}}) => (
                <Editor 
                apiKey="0ja56q6zxwba3ka20zefa8i0roo4oa8didkfrzayb6wk5tdo"
                initialValue={defaultValue}
                init={{
                    menubar: true,
                    height: 500,
                }}
                onEditorChange={onChange}
                />
            )}
            />
        </div>
    )
}
