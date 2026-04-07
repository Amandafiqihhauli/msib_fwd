const BookCard = ({ title, author, year, description, image }) => {
    return (
        <div className="card shadow-sm h-100">
        <img 
            src={book.image} 
            alt={book.title} 
            style={{ 
                width: "100%", 
                height: "auto", 
                objectFit: "contain" 
            }} 
            className="card-img-top book-image"
        />


        <div className="card-body text-center">
            <h5 className="card-title">{title}</h5>
            <p className="text-muted">{author}</p>
            <p className="text-muted">{year}</p>
            <p className="card-text">{description}</p>
            <div className="btn-group">
                <button className="btn btn-sm btn-outline-primary me-2">View</button>
                <button className="btn btn-sm btn-outline-secondary">Edit</button>
            </div>

        </div>
        </div>
    );
};

export default BookCard;
