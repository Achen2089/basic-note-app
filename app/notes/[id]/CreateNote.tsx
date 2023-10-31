'use client';

import { useState } from 'react';
import { useRouter } from 'next/router';

export default function CreateNote() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    
    const create = async () => {
        await fetch('http://127.0.0.1:8090/api/collections/notes/records', {
            method: 'POST',
            body: JSON.stringify({ title, content }),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        setContent('');
        setTitle('');
    }

    return (
        <form onSubmit={create}>
            <h3>Create a new Note</h3>
            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
                placeholder="Content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
            />
            <button type="submit">Create Note</button>
        </form>
    )
}