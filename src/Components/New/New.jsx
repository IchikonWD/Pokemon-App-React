import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { PokemonContext } from "../../Contexts/pokemonContext";
import Swal from "sweetalert2";

const New = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { pokemon, setPokemon } = useContext(PokemonContext);
  const [idCount, setIdCount] = useState(1119);

  const onSubmit = (data) => {
    console.log(data);
    const newData = {
      abilities: [
        {
          ability: {
            name: data.abilityOne,
          },
        },
        {
          ability: {
            name: data.abilityTwo,
          },
        },
      ],
      id: idCount,
      name: data.name,
      sprites: {
        front_default: data.url,
      },
      types: [
        {
          type: {
            name: data.typeOne,
          },
        },
        {
          type: {
            name: data.typeTwo,
          },
        },
      ],
    };
    setIdCount(idCount + 1);
    setPokemon([...pokemon, newData]);
    Swal.fire("Nice!", `${newData.name} was created!`, "success");
  };
  return (
    <section className="formContainer">
      <form className="addPokemon_form" onSubmit={handleSubmit(onSubmit)}>
        <label className="labels">
          Name:
          <input {...register("name", { required: true, minLength: 3 })} />
          {errors.name && "This field is required"}
        </label>
        <label className="labels">
          Image Url:
          <input {...register("url", { required: true, minLength: 3 })} />
          {errors.url && "This field is required"}
        </label>
        <label className="labels">
          First Type:
          <select {...register("typeOne", { required: true })}>
            <option value="normal">Normal</option>
            <option value="fire">Fire</option>
            <option value="water">Water</option>
            <option value="grass">Grass</option>
            <option value="electric">Electric</option>
            <option value="ice">Ice</option>
            <option value="fighting">Fighting</option>
            <option value="poison">Poison</option>
            <option value="ground">Ground</option>
            <option value="flying">Flying</option>
            <option value="psychic">Psychic</option>
            <option value="bug">Bug</option>
            <option value="rock">Rock</option>
            <option value="ghost">Ghost</option>
            <option value="dark">Dark</option>
            <option value="dragon">Dragon</option>
            <option value="steel">Steel</option>
            <option value="fairy">Fairy</option>
            {errors.typeOne && "This field is required"}
          </select>
        </label>
        <label className="labels">
          Second Type:
          <select {...register("typeTwo")}>
            <option value=""></option>
            <option value="normal">Normal</option>
            <option value="fire">Fire</option>
            <option value="water">Water</option>
            <option value="grass">Grass</option>
            <option value="electric">Electric</option>
            <option value="ice">Ice</option>
            <option value="fighting">Fighting</option>
            <option value="poison">Poison</option>
            <option value="ground">Ground</option>
            <option value="flying">Flying</option>
            <option value="psychic">Psychic</option>
            <option value="bug">Bug</option>
            <option value="rock">Rock</option>
            <option value="ghost">Ghost</option>
            <option value="dark">Dark</option>
            <option value="dragon">Dragon</option>
            <option value="steel">Steel</option>
            <option value="fairy">Fairy</option>
          </select>
        </label>
        <label className="labels">
          Attack:
          <input {...register("Attack", { required: true, minLength: 3 })} />
          {errors.Attack && "This field is required"}
        </label>
        <label className="labels">
          Defense:
          <input {...register("Defense", { required: true, minLength: 3 })} />
          {errors.Defense && "This field is required"}
        </label>
        <label className="labels">
          Speed:
          <input {...register("Speed", { required: true, minLength: 3 })} />
          {errors.Speed && "This field is required"}
        </label>
        <label className="labels">
          HP:
          <input {...register("HP", { required: true, minLength: 3 })} />
          {errors.HP && "This field is required"}
        </label>
        <label className="labels">
          Sp. Attack:
          <input {...register("spAttack", { required: true, minLength: 3 })} />
          {errors.spAttack && "This field is required"}
        </label>
        <label className="labels">
          Sp. Defense:
          <input {...register("spDefense", { required: true, minLength: 3 })} />
          {errors.spDefense && "This field is required"}
        </label>
        <input
          type="submit"
          value="Create Pokemon!"
          className="addPokemon_btn"
        />
      </form>
    </section>
  );
};

export default New;
