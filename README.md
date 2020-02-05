# Dynamic Table

This library provide a React JS based Table component which has pagination and sorting. The headers and data have to be set dynamically.

# Installation

```
npm install @wynsoft/dynamic-table
```

## Properties

#### headers:

This is a array of objects of the following format:
{
title,
width,
align,
fieldName
}

- `title` (required): This sets the column title.
- `width` (optional): This sets the width of the column. If left out it, the width will be auto determined. It's recommended to set this for proper formatting.
- `align` (optional): This align the contents of the column. Choices are - `left`, `center`, `right`. Default is `left`
- `fieldName` (required): This sets the field name from which the data comes. It should match the field name specified in the data object.

`Example`:

```
    {
      title: "First Name",
      width: "150px",
      align: "left",
      fieldName: "firstName"
    }
```

### data

This is a array of array objects that contain the data for the table. Each column of data is a Array of objects. The example below shows how you must setup your data. Each object has the and/or the `fieldType`. Currently, `currency` is the only supported `fieldType`.

`Example`:

```
[
    [
      { id: 1 },
      { firstName: "George" },
      { lastName: "Benson" },
      { address: "125 Main St., Canton, Ohio" },
      { salary: 85000, fieldType: "currency" }
    ],
    [
      { id: 2 },
      { firstName: "Stacy" },
      { lastName: "Locksmith" },
      { address: "25-525 King St., Canton, Ohio" },
      { salary: 105000, fieldType: "currency" }
    ]
]
```

### pageSize

This sets the number of rows to display per page. Default is 10.

### currentPage

This sets the current page to display. Default is 1.

### sortOn

This sets the `fieldName` to sort on. It's `optional` but when used must be one one the field names from the data object.

### sortOrder

This sets the sort order. It's `optional` and is set to `ASC` by default. Possible choices are `ASC` and `DESC`.

## Usage

First import the component into your project:

```
import DynamicTable from 'dynamic-table';
```

Now add the component to the app:

```
<DynamicTable
    headers = {<headers-object>}
    data = {<data-object>}
    pageSize = "10",
    currentPage = "1",
    sortOn = "id",
    sortOrder = "ASC"
>
```

## Demo

https://wynsoft.ca/react/dynamic-table/
