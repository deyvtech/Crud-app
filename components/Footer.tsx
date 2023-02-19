export default function Footer() {
    return (
        <footer className="h-[10vh] flex justify-center items-center bg-slate-500">
            <p className="text-xl font-semibold text-white">Developed by DeyvTech <sup>&copy;</sup> { new Date().getFullYear() }</p>
        </footer>
    )
}