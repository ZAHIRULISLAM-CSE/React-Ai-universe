import React from "react";

const Modal = (props) => {
    console.log(props.modalData);
    const {description,pricing,input_output_examples,features,image_link,integrations}=props.modalData;
  return (
    <div>
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box  max-w-4xl">
        {/* Work of two div */}
            <div>
                <h2>{description}</h2>
                <div className="flex justify-between">
                {
                      pricing? pricing.map( single => {
                        return (
                            <div>
                                <p>{single.price}</p>
                                <p>{single.plan}</p>    
                            </div>
                        )
                      } ):"Not found"
                    }
                </div>
                <div className="flex justify-between">
                    <div>
                        <h2 className="text-3xl">Features</h2>
                        {
                           features? Object.values(features || {}).map(feature=><p>{feature?feature.feature_name:"Not Found"}</p>):"Not Found"
                        }
                    </div>
                    <div>
                    <h2 className="text-3xl">Intregrations</h2>
                    {
                        integrations?integrations.map(single=><p>{single}</p>):"Not Found"
                    }
                    </div>
                </div>
                    
            </div>
          <div className="modal-action">
            <label htmlFor="my-modal" className="btn">
              Close
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
