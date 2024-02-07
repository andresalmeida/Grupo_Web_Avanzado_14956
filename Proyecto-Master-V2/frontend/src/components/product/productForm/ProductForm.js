import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Card from "../../card/Card";

import "./ProductForm.scss";

const ProductForm = ({
  product,
  productImage,
  imagePreview,
  description,
  setDescription,
  handleInputChange,
  handleImageChange,
  saveProduct,
}) => {
  return (
    <div className="add-product">
      <Card cardClass={"card"}>
        <form onSubmit={saveProduct}>
          <Card cardClass={"group"}>
            <label>Imagen del Producto</label>
            <code className="--color-dark">
              Formatos soportados: jpg, jpeg, png
            </code>
            <input
              type="file"
              name="image"
              onChange={(e) => handleImageChange(e)}
            />

            {imagePreview != null ? (
              <div className="image-preview">
                <img src={imagePreview} alt="product" />
              </div>
            ) : (
              <p>No hay imagen para este poducto.</p>
            )}
          </Card>
          <label>Nombre del Producto:</label>
          <input
            type="text"
            placeholder="Nombre del Producto"
            name="name"
            value={product?.name}
            onChange={handleInputChange}
          />

          <label>Categoria:</label>
          <input
            type="text"
            placeholder="Categoria"
            name="category"
            value={product?.category}
            onChange={handleInputChange}
          />

          <label>Precio:</label>
          <input
            type="text"
            placeholder="Precio"
            name="price"
            value={product?.price}
            onChange={handleInputChange}
          />

          <label>Cantidad:</label>
          <input
            type="text"
            placeholder="Cantidad"
            name="quantity"
            value={product?.quantity}
            onChange={handleInputChange}
          />

          <label>Descripción:</label>
          <ReactQuill
            theme="snow"
            value={description}
            onChange={setDescription}
            modules={ProductForm.modules}
            formats={ProductForm.formats}
          />

          <div className="--my">
            <button type="submit" className="--btn --btn-primary">
              Guardar Producto
            </button>
          </div>
        </form>
      </Card>
    </div>
  );
};

ProductForm.modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }, { font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [{ align: [] }],
    [{ color: [] }, { background: [] }],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["clean"],
  ],
};
ProductForm.formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "color",
  "background",
  "list",
  "bullet",
  "indent",
  "link",
  "video",
  "image",
  "code-block",
  "align",
];

export default ProductForm;
