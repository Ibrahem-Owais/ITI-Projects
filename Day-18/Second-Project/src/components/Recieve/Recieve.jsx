export default function Recieve({ productDetails, index, deleteProduct, updateProduct }) {
    let { id, prodName, price, desc, quantity, onSale } = productDetails;

    return (
        <div className="col-md-4 col-lg-3">
            <div
                className="card h-100 border-0 text-white position-relative overflow-hidden"
                style={{
                    background: 'rgba(255, 255, 255, 0.07)',
                    backdropFilter: 'blur(12px)',
                    WebkitBackdropFilter: 'blur(12px)',
                    borderRadius: '16px',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)'
                }}
            >
                {onSale && (
                    <span className="badge bg-danger position-absolute top-0 end-0 m-3 px-3 py-2 rounded-pill shadow-sm fs-7 fw-semibold">
                        Sale
                    </span>
                )}

                <div className="card-body p-4 d-flex flex-column justify-content-between">
                    <div>
                        <h5 className="card-title fw-bold fs-4 mb-1 text-warning">{prodName}</h5>
                        <p className="card-subtitle text-light opacity-75 fs-6 mb-3">{desc}</p>
                        <div className="d-flex align-items-baseline mb-3">
                            <span className="fs-3 fw-bold me-1">${price}</span>
                            <span className="text-muted small">Count: {quantity}</span>
                        </div>
                    </div>

                    <div className="d-flex gap-2 pt-2 border-top border-secondary border-opacity-25">
                        <button
                            onClick={() => deleteProduct(id)}
                            className="btn btn-outline-danger btn-sm flex-fill rounded-3 fw-semibold"
                        >
                            Delete
                        </button>
                        <button
                            onClick={() => updateProduct(index)}
                            className="btn btn-warning btn-sm flex-fill rounded-3 fw-semibold text-dark"
                        >
                            Update
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}