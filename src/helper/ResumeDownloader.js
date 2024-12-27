export function resumeDownloader() {
    const pdfUrl = "resume.pdf"
    const link = document.createElement('a')
    link.href = pdfUrl
    link.download = "emmanuel_resume.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
}