import { createSlice } from "@reduxjs/toolkit";

export const languageSlice = createSlice({
  name: "language",
  initialState: {
    words: {
      en: {
        clear_all: "CLEAR ALL",
        primary: "Primary",
        secondary: "Secondary",
        title: "Main Title",
        subtitle: "Subtitle",
        titles: "Titles",
        textLeft: "Text 1",
        textRight: "Text 2",
        color_hint: "* double click the color for the default color",
        add: "ADD",
        clear: "CLEAR",
        personal_information: "Personal Information",
        education: "Education",
        experience: "Experience",
        education_upper: "EDUCATION",
        experience_upper: "EXPERIENCE",
        name_surname: "Name Surname",
        form_title: "Title",
        address: "Address",
        phone_number: "Phone Number",
        email_address: "Email Address",
        about: "About",
        select: "Select",
        native: "Native Language",
        school: "School Name",
        subject: "Subject",
        degree: "Degree",
        city: "City",
        from: "From",
        to: "To",
        company: "Company Name",
        position: "Position",
        description: "Description",
        confirm: "Are you sure all data will be deleted?",
        top: "Top",
        right: "Right",
        bottom: "Bottom",
        left: "Left",
        margin_hint: "* you can set print page margins",
      },
     
    },
    language: "en",
  },
  reducers: {
    setLanguage: (state, action) => {
      state.language = action.payload;
    },
  },
});

export const { setLanguage } = languageSlice.actions;

export default languageSlice.reducer;
