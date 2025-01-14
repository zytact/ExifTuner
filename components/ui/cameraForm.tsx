'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { CameraSchema } from '@/lib/schema';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { modifyCameraExifData } from '@/lib/modifyExif';
import downloadImage from '@/lib/downloadImage';
import fileNameExtract from '@/lib/fileNameExtract';

interface CameraFormProps {
    dataUrls: string[];
}

export default function CameraForm({ dataUrls }: CameraFormProps) {
    const form = useForm<z.infer<typeof CameraSchema>>({
        resolver: zodResolver(CameraSchema),
        defaultValues: {
            make: '',
            model: '',
        },
    });

    function onSubmit(values: z.infer<typeof CameraSchema>) {
        dataUrls.forEach((dataUrl) => {
            const modifiedImage = modifyCameraExifData(
                dataUrl,
                values.make,
                values.model
            );
            downloadImage(modifiedImage, fileNameExtract(dataUrl));
        });
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                    control={form.control}
                    name="make"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Make</FormLabel>
                            <FormControl>
                                <Input placeholder="" {...field} />
                            </FormControl>
                            <FormDescription>
                                Device Used to Take Photo
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="model"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Model</FormLabel>
                            <FormControl>
                                <Input placeholder="" {...field} />
                            </FormControl>
                            <FormDescription>
                                Model of the Device
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit">Submit</Button>
            </form>
        </Form>
    );
}
