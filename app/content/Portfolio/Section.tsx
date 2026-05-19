export default function Section({children, styles = ''}: SectionProps) {
    return (
        <div className={`flex flex-col gap-5 px-8 py-7 md:px-12 md:py-10 ${styles}`}>
            {children}
        </div>
    )
}