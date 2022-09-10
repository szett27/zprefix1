//visitors just get to see everything probably with cards
    //server has a route that views all inventory - complete

// As an inventory manager I want to be able to create an account so that I can track my inventory.
    //server has a post route to be able to create a user, currently does not check for duplicates

// The user credentials must be salted and hashed before being stored.
    //will do this at the very end using bcrypt

// As an inventory manager I want to be able to log into my account so that I can see my inventory of items.
   //currently wokring with route to get all items from a single manager using their id - route complete /users/id

// After logging in, the inventory manager should be redirected to their inventory of items.
    //front end UI function

// As an inventory manager I want to be able to create a new item so that I can share my item details with the world.
    //need a post route for a new item

// After the item is created, the inventory manager should be redirected to their inventory of items.
    //UI function

// An item displays name, description, and quantity.
    //UI function

// As an inventory manager I want to be able to see a my entire inventory of items.
    //UI function

// The inventory of items should display the first 100 characters of each item description, with “...” at the end if the description is longer than 100 characters.
    //UI function

// As an inventory manager I want to be able to see any individual item I have added. 
    //UI function

// The full item information should be displayed.
    //UI function

// As an inventory manager I want to be able to edit an item so that I can fix any mistakes I made creating it.
    //PATCH Route probably

// When the user toggles edit mode, the page remains the same and the fields become editable.
    //UI function make fields editable

// As an inventory manager I want to be able to delete an item so that I can remove any unwanted content.
    //delete route - delete route created

// When the user deletes the item they should be redirected to their inventory of items.
    //UI Function

// As a visitor, who is not logged in, I want to be able to view all items created by every inventory manager so that I can browse every item.
    //Default screen
// Unauthenticated users should be able to view all items, and any single item.
    //Default UI

// The items should only display the first 100 characters of its description with “...” at the end if it is longer than 100 characters.
    //UI function

// As a visitor, who is not logged in, I want to be able to view a specific item created by any user so that I can see all of its details.
    //view specific item

// Unauthenticated users should be able to view all items, and any single item.
    //this is just a repeat of above

// As an inventory manager I want to be able to view all items created by every inventory manager so that I can browse every item.
    //logged in as inventory manager can view the full item view but without the ability to edit


