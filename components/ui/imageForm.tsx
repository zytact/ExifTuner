'use client';

import { useState, ChangeEvent } from 'react';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import DateTimeForm from '@/components/ui/dateTimeForm';
import LocationForm from '@/components/ui/locationForm';
import CameraForm from '@/components/ui/cameraForm';
import CarouselImages from '@/components/ui/CarouselImages';

export default function ImageForm() {
    const [images, setImages] = useState<string[] | null>(null);
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const files = Array.from(e.target.files);
            const readFilesPromises = files.map((file) => {
                return new Promise<string>((resolve, reject) => {
                    const reader = new FileReader();
                    reader.readAsDataURL(file);
                    reader.onload = () => resolve(reader.result as string);
                    reader.onerror = reject;
                });
            });

            Promise.all(readFilesPromises)
                .then((fileDataUrls) => {
                    setImages(fileDataUrls);
                })
                .catch((error) => {
                    console.error('Error reading files: ', error);
                });
        }
    };
    return (
        <Tabs defaultValue="d&t">
            {images && images.length > 0 && (
                <CarouselImages dataUrls={images as string[]} className="m-2" />
            )}
            <Input
                type="file"
                onChange={handleChange}
                accept=".jpg, .jpeg"
                multiple
            />
            <div className="m-2">
                <TabsList className="w-full">
                    <TabsTrigger value="d&t">Date & Time</TabsTrigger>
                    <TabsTrigger value="location">GPS Info</TabsTrigger>
                    <TabsTrigger value="camera">Camera Info</TabsTrigger>
                </TabsList>
                <TabsContent value="d&t">
                    <DateTimeForm dataUrls={images as string[]} />
                </TabsContent>
                <TabsContent value="location">
                    <LocationForm dataUrls={images as string[]} />
                </TabsContent>
                <TabsContent value="camera">
                    <CameraForm dataUrls={images as string[]} />
                </TabsContent>
            </div>
        </Tabs>
    );
}
