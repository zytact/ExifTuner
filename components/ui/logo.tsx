const logo = `
███████╗██╗  ██╗██╗███████╗████████╗██╗   ██╗███╗   ██╗███████╗██████╗ 
██╔════╝╚██╗██╔╝██║██╔════╝╚══██╔══╝██║   ██║████╗  ██║██╔════╝██╔══██╗
█████╗   ╚███╔╝ ██║█████╗     ██║   ██║   ██║██╔██╗ ██║█████╗  ██████╔╝
██╔══╝   ██╔██╗ ██║██╔══╝     ██║   ██║   ██║██║╚██╗██║██╔══╝  ██╔══██╗
███████╗██╔╝ ██╗██║██║        ██║   ╚██████╔╝██║ ╚████║███████╗██║  ██║
╚══════╝╚═╝  ╚═╝╚═╝╚═╝        ╚═╝    ╚═════╝ ╚═╝  ╚═══╝╚══════╝╚═╝  ╚═╝
`;

export function Logo() {
    return (
        <pre
            className="m-10"
            style={{
                fontFamily: 'monospace',
                fontSize: '0.47rem',
                whiteSpace: 'pre',
            }}
        >
            {logo}
        </pre>
    );
}
