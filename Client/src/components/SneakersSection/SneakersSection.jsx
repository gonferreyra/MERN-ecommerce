import React, { useContext, useMemo, useState } from "react";
import {
  SneakerContainer,
  SearchBar,
  SearchText,
  SearchInput,
  SearchBtn,
  SearchError,
  SearchErrorP,
  SneakerSection,
  ShowMoreBtn,
  Section,
  ButtonContainer,
} from "./SneakersSectionStyle";
import SneakerCard from "./SneakerCard/SneakerCard";
import { useDispatch, useSelector } from "react-redux";
import { UserContext } from "../Context/UserContext";
import { useForm } from "../../hooks/useForm";
import { uiRemoveError, uiSetError } from "../../redux/UiReducer/ui-actions";

const SneakersSection = () => {
  // connect state from store to component
  // const products = useSelector((state) => state.shop.products);
  // console.log(products);

  // connect state from new reducer from API products
  const products = useSelector((state) => state.products.products);
  // console.log(products);

  // Items to show, determines how many items are shown on the sneakers section
  const [itemsToShow, setItemsToShow] = useState({
    items: 3,
  });
  const { items } = itemsToShow;
  const showMore = () => {
    setItemsToShow({ ...itemsToShow, items: items + 3 });
  };

  // Random display array of sneaker by creating a new array
  const shuffleArray = (array) => {
    const newArray = array
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);
    return newArray;
  };
  // Usememo to store the value and avoid to change sneakers everytime the component re-render when cart is open
  const memoProducts = useMemo(() => shuffleArray(products), [products]);
  // console.log(memoProducts);

  // bring state from context
  const { cartIsOpen } = useContext(UserContext);

  // SearchBar
  const dispatch = useDispatch();
  const { msgError } = useSelector((state) => state.ui);
  const [searchIsTrue, setSearchIsTrue] = useState(false);
  const [search, handleInputChange] = useForm({
    searchParams: "",
  });
  // Array to map when the search is succesfull
  const [searchResultArray, setSearchResultArray] = useState([]);
  // console.log(searchResultArray);
  const { searchParams } = search;

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    let searchResult = [];
    let searchValue = searchParams.toLowerCase();

    if (searchValue === "") {
      dispatch(uiSetError("Search field is empty. Please try again."));
      setTimeout(() => {
        dispatch(uiRemoveError());
      }, 4000);
      return;
    } else {
      products.forEach((sneaker) => {
        const { name, category, price } = sneaker;
        if (name.toLowerCase().includes(searchValue)) {
          searchResult.push(sneaker);
          setSearchIsTrue(true);
          return;
        } else if (price.toString() === searchValue) {
          searchResult.push(sneaker);
          setSearchIsTrue(true);
          return;
        } else if (category.toLowerCase() === searchValue) {
          searchResult.push(sneaker);
          setSearchIsTrue(true);
          return;
        }
      });

      if (searchResult.length === 0) {
        dispatch(
          uiSetError(
            "There are no sneakers with the searched parameters, please try again. You can search by name, category or price."
          )
        );
        setTimeout(() => {
          dispatch(uiRemoveError());
        }, 4000);
      }
    }
    return setSearchResultArray(searchResult);
  };

  return (
    <SneakerSection id="sneakerSection" cartIsOpen={cartIsOpen}>
      <Section>
        <SearchBar onSubmit={handleSearchSubmit}>
          <SearchText>Search for your favourite sneaker</SearchText>
          <SearchInput
            type="text"
            name="searchParams"
            autoComplete="off"
            value={searchParams}
            onChange={handleInputChange}
          />
          <SearchBtn type="submit">Search</SearchBtn>
        </SearchBar>
        {msgError && (
          <SearchError>
            <SearchErrorP>{msgError}</SearchErrorP>
          </SearchError>
        )}
        <SneakerContainer>
          {searchIsTrue
            ? searchResultArray
                .slice(0, items)
                .map((sneaker) => (
                  <SneakerCard
                    key={sneaker.id}
                    sneaker={sneaker}
                    cartIsOpen={cartIsOpen}
                  />
                ))
            : memoProducts
                .slice(0, items)
                .map((sneaker) => (
                  <SneakerCard
                    key={sneaker._id}
                    sneaker={sneaker}
                    cartIsOpen={cartIsOpen}
                  />
                ))}
        </SneakerContainer>
        <ButtonContainer>
          {!searchIsTrue && (
            <ShowMoreBtn onClick={showMore}>Show more</ShowMoreBtn>
          )}
          {/* 
            Hacer boton que cuando muestre resultado deje volver al inicio con los 3 sneakers
           */}
        </ButtonContainer>
      </Section>
    </SneakerSection>
  );
};

export default SneakersSection;
