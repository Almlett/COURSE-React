import React from 'react';

const NewProduct = () => {
    return ( 
        <div className="row justify-content-center">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-cemter mb-4 font-wight-bold">
                            New product
                        </h2>

                        <form>
                            <div className="form-group">
                                <label>
                                    Product name
                                </label>

                                <input 
                                    type="text"
                                    className="form-control"
                                    placeholder="Product name"
                                    name="name"
                                />
                            </div>

                            <div className="form-group">
                                <label>
                                    Product cost
                                </label>

                                <input 
                                    type="number"
                                    className="form-control"
                                    placeholder="Product cost"
                                    name="cost"
                                />
                            </div>

                            <button 
                                type="submit"
                                className="btn btn-primary font-weifht-bold text-uppercase d-block w-100"
                            >
                                    Add
                            </button>

                            
                        </form>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default NewProduct;