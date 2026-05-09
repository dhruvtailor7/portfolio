export default function Section({children, styles = ''}: SectionProps) {
    return (
        <div className={`flex flex-col gap-5 px-12 py-10 ${styles}`}>
            {children}
        </div>
    )
}