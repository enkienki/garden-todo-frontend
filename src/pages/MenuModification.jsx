import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Modal from "react-modal";
import NavBar from "../components/Navbar";
import Button from "../components/Button";
import fetchProducts from "../functions/fetch-products";
import groupBy from "../functions/group-by";
import axios from "axios";
import Title from "../components/TitlePage";

export default function MenuModification() {
  const [initialCarte, setInitialCarte] = useState([]);
  const [itemToModify, setitemToModify] = useState({});
  const [itemToDelete, setitemToDelete] = useState({});
  const [updateModalIsOpen, setUpdateModalIsOpen] = useState(false);
  const [deleteModalIsOpen, setDeleteModalIsOpen] = useState(false);
  const [createModalIsOpen, setCreateModalIsOpen] = useState(false);
  const [searchProduct, setSearchProduct] = useState("");
  const { register, handleSubmit, errors } = useForm();

  Modal.setAppElement("#root");

  const updateProduct = () => {
    initialCarte.splice(initialCarte.indexOf(itemToModify), 1, itemToModify);
  };

  const deleteProduct = () => {
    initialCarte.splice(initialCarte.indexOf(itemToDelete), 1);
  };

  const createProduct = (itemToCreate) => {
    initialCarte.splice(0, 0, itemToCreate);
  };

  const filteredProducts = Object.values(groupBy(initialCarte, "type"))
    .flat()
    .filter((product) =>
      product.name.toLowerCase().includes(searchProduct.toLowerCase())
    );

  const style = {
    overlay: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(000, 000, 000, 0.75)",
      backdropFilter: "blur(3px)",
    },
    content: {
      position: "absolute",
      right: "0",
      left: "0",
      top: "20%",
      marginLeft: "auto",
      marginRright: "auto",
    },
  };

  useEffect(() => {
    fetchProducts(setInitialCarte);
  }, []);

  return (
    <div className="bg-dark min-vh-100 pt-3">
      <Title title="carte" />

      <div className="container">
        <div className="row justify-content-center m-4">
          <div className="col-lg-4 col-md-6 col-sm-8 col-10">
            <input
              className="form-control"
              onChange={(e) => setSearchProduct(e.target.value)}
              placeholder="Rechercher"
            />
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row justify-content-center m-4">
          <Button
            name="Ajouter un produit"
            color="bg-gradient-info"
            handleClick={() => setCreateModalIsOpen(!createModalIsOpen)}
          />
          <Button
            name="Enregistrer les modifications"
            color="bg-gradient-success"
            handleClick={async () =>
              await axios.post(
                "https://commande-kebab-backend.herokuapp.com/api/sendcarte",
                initialCarte
              )
            }
          />
        </div>
      </div>

      {initialCarte.length ? (
        filteredProducts.map((a) => (
          <div className="container" key={a._id}>
            <div className="row justify-content-center bg-gradient-dark border border-secondary rounded mb-4 shadow text-light text-capitalize">
              <div className="col-lg-6 col-md-8 col-12">
                <div className="p-1">
                  Catégorie :{" "}
                  <span className="font-weight-bold text-light text-uppercase">
                    {a.type}
                  </span>
                </div>
                <div className="p-1">
                  Nom :{" "}
                  <span className="font-weight-bold text-light text-uppercase">
                    {a.name}
                  </span>
                </div>
                <div className="p-1">
                  prix :{" "}
                  <span className="font-weight-bold text-light text-uppercase">
                    {a.price}
                  </span>
                  €
                </div>
              </div>
              <div className="col-auto align-self-center">
                <Button
                  name="modifier"
                  color="bg-gradient-warning text-dark"
                  handleClick={() => {
                    setUpdateModalIsOpen(!updateModalIsOpen);
                    setitemToModify(a);
                  }}
                />
                <Button
                  name="supprimer"
                  color="bg-gradient-danger"
                  handleClick={() => {
                    setDeleteModalIsOpen(!deleteModalIsOpen);
                    setitemToDelete(a);
                  }}
                />
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="text-center">
          <div className="spinner-border text-secondary m-5"></div>
        </div>
      )}

      <Modal
        className="container bg-gradient-dark rounded shadow text-light text-uppercase font-weight-bold"
        isOpen={updateModalIsOpen}
        onRequestClose={() => setUpdateModalIsOpen(!updateModalIsOpen)}
        shouldFocusAfterRender={false}
        style={style}
      >
        <p className="text-center">Modifier</p>
        <form
          onSubmit={handleSubmit((data) => {
            Object.assign(itemToModify, data);
            updateProduct();
            setUpdateModalIsOpen(!updateModalIsOpen);
          })}
        >
          <div className="form-group">
            <label htmlFor="type">Categorie</label>
            <input
              className="form-control"
              id="type"
              name="type"
              defaultValue={itemToModify.type}
              ref={register({ required: true })}
            />
            {errors.type && (
              <span className="text-dark text-lowercase font-weight-bold">
                champ obligatoire
              </span>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="name">Nom</label>
            <input
              className="form-control"
              id="name"
              name="name"
              defaultValue={itemToModify.name}
              ref={register({ required: true })}
            />
            {errors.name && (
              <span className="text-dark text-lowercase font-weight-bold">
                champ obligatoire
              </span>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="price">Prix</label>
            <input
              className="form-control"
              id="price"
              name="price"
              type="number"
              defaultValue={itemToModify.price}
              ref={register({ required: true, pattern: /^[0-9]*$/ })}
            />
            {errors.price?.type === "required" && (
              <span className="text-dark text-lowercase font-weight-bold">
                champ obligatoire
              </span>
            )}
            {errors.price?.type === "pattern" && (
              <span className="text-dark text-lowercase font-weight-bold">
                seul les chiffres sont acceptés
              </span>
            )}
          </div>

          <input
            className="mb-4 btn btn-sm bg-gradient-success text-light"
            type="submit"
          />
        </form>
      </Modal>

      <Modal
        className="container bg-gradient-dark rounded shadow text-light text-uppercase font-weight-bold"
        isOpen={createModalIsOpen}
        onRequestClose={() => setCreateModalIsOpen(!createModalIsOpen)}
        shouldFocusAfterRender={false}
        style={style}
      >
        <p className="text-center">Creer</p>
        <form
          onSubmit={handleSubmit((data) => {
            createProduct(data);
            setCreateModalIsOpen(!createModalIsOpen);
          })}
        >
          <div className="form-group">
            <label htmlFor="type">Categorie</label>
            <input
              className="form-control"
              id="type"
              name="type"
              ref={register({ required: true })}
            />
            {errors.type && <span>This field is required</span>}
          </div>
          <div className="form-group">
            <label htmlFor="name">Nom</label>
            <input
              className="form-control"
              id="name"
              name="name"
              ref={register({ required: true })}
            />
            {errors.name && <span>This field is required</span>}
          </div>
          <div className="form-group">
            <label htmlFor="price">Prix</label>
            <input
              className="form-control"
              id="price"
              name="price"
              type="number"
              ref={register({ required: true, pattern: /^[0-9]*$/ })}
            />
            {errors.price?.type === "required" && (
              <span className="text-dark text-lowercase font-weight-bold">
                champ obligatoire
              </span>
            )}
            {errors.price?.type === "pattern" && (
              <span className="text-dark text-lowercase font-weight-bold">
                seul les chiffres sont acceptés
              </span>
            )}
          </div>

          <input
            className="mb-4 btn btn-sm bg-gradient-success"
            type="submit"
          />
        </form>
      </Modal>

      <Modal
        className="container bg-gradient-dark rounded shadow text-light text-uppercase font-weight-bold"
        isOpen={deleteModalIsOpen}
        onRequestClose={() => setDeleteModalIsOpen(!deleteModalIsOpen)}
        shouldFocusAfterRender={false}
        style={style}
      >
        <div className="container m-4">
          <div className="p-1 font-weight-light text-light text-capitalize">
            Catégorie :{" "}
            <span className="font-weight-bold text-light text-uppercase">
              {itemToDelete.type}
            </span>
          </div>
          <div className="p-1 font-weight-light text-light text-capitalize">
            Nom :{" "}
            <span className="font-weight-bold text-light text-uppercase">
              {itemToDelete.name}
            </span>
          </div>
          <div className="p-1 font-weight-light text-light text-capitalize">
            prix :{" "}
            <span className="font-weight-bold text-light text-uppercase">
              {itemToDelete.price}
            </span>
          </div>
        </div>
        <div className="row justify-content-center mb-4">
          <Button
            name="supprimer définitivement"
            color="bg-gradient-danger"
            handleClick={() => {
              deleteProduct();
              setDeleteModalIsOpen(!deleteModalIsOpen);
            }}
          />
        </div>
      </Modal>

      <div className="p-5"></div>

      <NavBar />
    </div>
  );
}
