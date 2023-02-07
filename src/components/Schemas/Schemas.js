export const schema1 = {
  type: "object",
  required: ["client", "client_Type"],
  properties: {
    client: {
      type: "string",
      title: "Is existing client",
      enum: ["Yes", "No"],
      default: "No",
    },
    client_Type: {
      type: "number",
      title: "Client Type",
      enum: ["Private", "Corporate"],
      default: "Corporate",
    },
  },
};
export const uiSchema1 = {
  client: {
    "ui:widget": "radio",
    "ui:options": {
      inline: true,
    },
    classNames: "inline-block outputlabel",

    // "ui:style": { border: "1px solid black" },
  },
  client_Type: {
    "ui:widget": "radio",
    "ui:options": {
      inline: true,
    },

    classNames: "inline-block",
  },
};

export const schema2 = {
  title: "",
  description: "",
  type: "object",
  required: ["client_Name", "client_Select"],
  properties: {
    client_Name: {
      type: "string",
      title: "Search with client name",
    },
    client_Select: {
      type: "string",
      title: "Select client",
      enum: ["client1", "client2"],
      default: "client1",
    },
  },
};

export const uiSchema2 = {
  "ui:submitButtonOptions": {
    submitText: "Search",
    norender: false,
    props: {
      disabled: false,
      className: "btn btn-success",
    },
  },
  client_Name: {
    "ui:placeholder": "Please enter the full legal name",
  },
};

export const schema3 = {
  title: "",
  description: "",
  type: "object",
  required: ["client_Name", "display_Name", "entity_Code"],
  properties: {
    client_Name: {
      type: "string",
      title: "Client Name",
    },
    display_Name: {
      type: "string",
      title: "Display Name",
    },

    entity_Code: {
      type: "string",
      title: "Entity Code",
    },
    registration_Num: {
      type: "string",
      title: "Registration Number:",
    },
    vat_Num: {
      type: "string",
      title: "Vat Number:",
    },
  },
};

export const uiSchema3 = {
  "ui:submitButtonOptions": {
    submitText: "Cancel",
    norender: false,
    props: {
      disabled: false,
      className: "btn btn-success",
    },
  },

  display_Name: {
    "ui:placeholder": "Please enter display name",
  },
  entity_Code: {
    "ui:placeholder": "Please enter entity code",
  },
  registration_Num: {
    "ui:placeholder": "Please enter registration number",
  },
  vat_Num: {
    "ui:placeholder": "Please enter vat number",
  },
};

export const schema4 = {
  type: "object",
  required: ["title", "first_Name", "sur_Name"],
  properties: {
    title: {
      type: "string",
      title: "Title:",
      default: "",
      enum: ["Low", "Medium", "High", "Emergency"],
    },

    first_Name: {
      type: "string",
      title: "First Name:",
    },
    sur_Name: {
      type: "string",
      title: "Surname:",
    },
  },
};

export const uiSchema4 = {
  "ui:submitButtonOptions": {
    submitText: "Cancel",
    norender: false,
    props: {
      disabled: false,
      className: "btn btn-success",
    },
  },

  first_Name: {
    "ui:placeholder": "Please enter firstname",
  },
  sur_Name: {
    "ui:placeholder": "Please enter surname",
  },
};
export const schema5 = {
  type: "object",
  required: ["broker", "product", "start_Policy", "end_Policy"],
  properties: {
    broker: {
      type: "string",
      title: "Broker:",
      default: "",
      enum: ["Broker1", "Broker2", "Broker3", "Broker4"],
    },

    product: {
      type: "string",
      title: "Product:",
      default: "",
      enum: [
        "product1",
        "product2",
        "product3",
        "product4",
        "policy_Hold",
        "addition_Policy_Hold",
      ],
    },
    start_Policy: {
      title: "Policy start date",
      type: "string",
      format: "date",
    },
    end_Policy: {
      title: "Policy end date",
      type: "string",
      format: "date",
    },
    policy_Hold: {
      type: "string",
      title: "Policy holder:",
    },
    addition_Policy_Hold: {
      type: "string",
      title: "Additional Policy holder:",
    },
  },
};

export const uiSchema5 = {};
