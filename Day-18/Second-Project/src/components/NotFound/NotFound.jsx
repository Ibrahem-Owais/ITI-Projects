import errorImage from '../../assets/404.jpg'

export default function NotFound() {
    return (
        <>
            <div className="container mx-auto">
                <img src={errorImage} alt="Not Found Image" className="w-100" />
            </div>
        </>
    )
}