'use client';

import { useParams } from 'next/navigation';

export default function AnomalyDetailPage() {
    const params = useParams();
    const id = params.id;

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-2xl font-bold mb-4">Chi tiết bất thường</h1>
            <p>ID: {id}</p>
            <p>Trang này đang được phát triển...</p>
        </div>
    );
}
