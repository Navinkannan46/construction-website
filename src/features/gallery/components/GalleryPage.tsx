import GalleryDetails from "./GalleryDetails"
import GalleryImages from "./GalleryImages"
import GalleryMainImage from "./GalleryMainImage"

const GalleryPage = () => {
    return (
        <div className="py-6">
            <GalleryDetails />
            <GalleryImages />
            <GalleryMainImage />
        </div>
    )
}

export default GalleryPage