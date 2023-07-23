import { createSelector } from "@reduxjs/toolkit";
import { getFilteredContacts } from "utils/utils";

export const selectItems = state => state.contacts.items;

export const selectFilter = state => state.filter;

export const selectIsLoading = state => state.contacts.isLoading;

export const selectError = state => state.contacts.error;

export const selectFilteredItems = createSelector([selectItems,selectFilter], getFilteredContacts);
