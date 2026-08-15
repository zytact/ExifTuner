# ExifTuner

ExifTuner is a web application for viewing and manipulating EXIF metadata in your images. Built with Next.js, it provides a user-friendly interface to edit image metadata without compromising image quality.

## Features

- View detailed EXIF metadata from your images
- Edit date/time information, GPS coordinates, and other EXIF data
- Batch processing for multiple images
- Privacy-focused: all processing happens in your browser
- Responsive design works on desktop and mobile devices

## Tech Stack

- [Next.js](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [piexifjs](https://github.com/hMatoba/piexifjs) - EXIF manipulation library

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 24
- [pnpm](https://pnpm.io/) (recommended) or npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/zytact/ExifTuner.git
cd ExifTuner
```

2. Install dependencies:

```bash
pnpm install
```

3. Run the development server:

```bash
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

### Building for Production

To build the application for production:

```bash
pnpm build
pnpm start
```

### Development

#### Code Style

This project uses ESLint and Prettier for code formatting:

```bash
# Run linter
pnpm lint

#Format code
pnpm format
```

#### Project Structure

- app - Next.js app router pages and layouts
- components - React components
- hooks - Custom React hooks
- lib - Utility functions and shared code
- public - Static assets

### Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository.
2. Create your feature branch (git checkout -b feature/amazing-feature)
3. Commit your changes (git commit -m 'Add some amazing feature')
4. Push to the branch (git push origin feature/amazing-feature)
5. Open a Pull Request

### License

This project is licensed under the MIT License - see the LICENSE file for details.

### Acknowledgements

- [piexifjs](https://github.com/hMatoba/piexifjs) for EXIF manipulation
