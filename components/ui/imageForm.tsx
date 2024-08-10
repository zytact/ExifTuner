"use client";

import { useState, ChangeEvent } from "react";
import { Input } from "@/components/ui/input";
import Image from "next/image";

export default function ImageForm() {
  const [image, setImage] = useState<string | null>(null);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        setImage(reader.result as string);
      };
    }
  };
  return (
    <>
      {image && (
        <Image
          src={image}
          alt="image"
          width={300}
          height={300}
          className="m-2"
        />
      )}
      <Input type="file" onChange={handleChange} />
    </>
  );
    return (
        <Tabs defaultValue="d&t">
            {image && (
                <Image
                    src={image}
                    alt="image"
                    width={300}
                    height={300}
                    className="m-2"
                />
            )}
            <Input type="file" onChange={handleChange} />
            <div className="m-2">
                <TabsList>
                    <TabsTrigger value="d&t">Date & Time</TabsTrigger>
                    <TabsTrigger value="location">Location</TabsTrigger>
                    <TabsTrigger value="camera">Camera</TabsTrigger>
                </TabsList>
                <TabsContent value="d&t">
                    <DateTimeForm dataUrl={image as string} />
                </TabsContent>
                <TabsContent value="location">
                    <LocationForm dataUrl={image as string} />
                </TabsContent>
                <TabsContent value="camera">
                    <CameraForm dataUrl={image as string} />
                </TabsContent>
            </div>
        </Tabs>
    );
}
