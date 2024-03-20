## Demo

<https://daily-routine-tool.netlify.app>

## Introduction

Protask is Introducing a compact yet powerful project management tool designed to address the specific challenges small teams face. With a sleek and intuitive interface, users can easily create, update, invite, and delete their projects.

## Key Features

Here's an improved version of the feature list:

1. **Task Management:**

   - Users can effortlessly create, edit, and delete tasks with ease.
   - Task status can be modified seamlessly using dropdown functionality.

2. **Team Member Integration:**

   - Users have the capability to add team members to their workspace for collaborative efforts.

3. **Invite Functionality:**

   - Users can conveniently send invites to team members via email, streamlining the onboarding process.

4. **Event Management:**

   - Users possess the ability to create, edit, and delete events effortlessly, ensuring effective event organization.

5. **Task and Event Assignment:**
   - Users can seamlessly assign tasks or events to team members, fostering efficient delegation and collaboration.

## Tech Stack

Javascript, React, Redux, RTK Query, Framer-motion, Tailwind CSS, Cloudinary

## Run Locally

Clone the project

```bash
  git clone https://github.com/satya-ranjon/protask.git
```

Go to the project directory

```bash
  cd protask
```

Install dependencies

```bash
  npm install
  yarn install
```

Start the server

```bash
  npm run dev
  yarn run dev
```

Set up Environment Variables:

- Create a `.env` file in the root directory of the project.
- Add the following environment variables to the `.env` file:

**Environment Variables Explanation**

Here's a brief explanation of the environment variables required for this project run:

- `VITE_BASE_API_URL`="Your_API_URL"
- `VITE_BASE_AUTH_API_URL`="Your_Auth_API_URL"
- `VITE_BASE_PARPAGE_SEARCH_RESULT`=10
- `VITE_BASE_PARPAGE_SLEIPNERS`=1000
- `VITE_BASE_SHOW_NUMBER_OF_SLEIPNERS_DASHBORD`=5
- `VITE_BASE_PARPAGE_ACTIVATES`=10
- `VITE_BASE_THIS_SITE_DOMEN_NAME`=<http://localhost:5173/>

## Authors

- [@Satya Ranjon](https://www.github.com/satya-ranjon)

## File Tree

```md
📦src
┣ 📂app
┃ ┣ 📜App.jsx
┃ ┗ 📜store.js
┣ 📂components
┃ ┣ 📂addSlipner
┃ ┃ ┣ 📜AddSleipnerToProject.jsx
┃ ┃ ┣ 📜SelectedSleipners.jsx
┃ ┃ ┗ 📜SleipnerList.jsx
┃ ┣ 📂common
┃ ┃ ┣ 📜Avatar.jsx
┃ ┃ ┣ 📜AvatarGroup.jsx
┃ ┃ ┣ 📜Button.jsx
┃ ┃ ┣ 📜ButtonIcon.jsx
┃ ┃ ┣ 📜Container.jsx
┃ ┃ ┣ 📜CreateButton.jsx
┃ ┃ ┣ 📜DeleteOption.jsx
┃ ┃ ┣ 📜DocumentCreate.jsx
┃ ┃ ┣ 📜DropdownIcon.jsx
┃ ┃ ┣ 📜FeatureHeader.jsx
┃ ┃ ┣ 📜Loader.jsx
┃ ┃ ┣ 📜LoadingButton.jsx
┃ ┃ ┣ 📜LoadingIcon.jsx
┃ ┃ ┣ 📜LoadingIconPrimary.jsx
┃ ┃ ┣ 📜Message.jsx
┃ ┃ ┣ 📜SectionTitle.jsx
┃ ┃ ┣ 📜ShowStarRating.jsx
┃ ┃ ┣ 📜StatusOption.jsx
┃ ┃ ┗ 📜TextareaInput.jsx
┃ ┣ 📂datePicker
┃ ┃ ┣ 📜DatePicker.jsx
┃ ┃ ┣ 📜Months.jsx
┃ ┃ ┗ 📜SingleDay.jsx
┃ ┣ 📂event
┃ ┃ ┗ 📜SingleEvent.jsx
┃ ┣ 📂footer
┃ ┃ ┗ 📜Footer.jsx
┃ ┣ 📂modal
┃ ┃ ┣ 📜FullModal.jsx
┃ ┃ ┣ 📜Modal.jsx
┃ ┃ ┗ 📜RightModal.jsx
┃ ┣ 📂navbar
┃ ┃ ┗ 📜Navbar.jsx
┃ ┣ 📂sidebar
┃ ┃ ┣ 📜LogoutAndSetting.jsx
┃ ┃ ┣ 📜MenuItem.jsx
┃ ┃ ┗ 📜SaidBar.jsx
┃ ┣ 📂skeleton
┃ ┃ ┣ 📜ActivatesSkelton.jsx
┃ ┃ ┣ 📜AvatarGroupSkelton.jsx
┃ ┃ ┣ 📜CreateTaskSkelton.jsx
┃ ┃ ┣ 📜SingleEventSkelton.jsx
┃ ┃ ┣ 📜SingleSearchResultSkelton.jsx
┃ ┃ ┣ 📜SingleSleipnerSkelton.jsx
┃ ┃ ┗ 📜TaskSkelton.jsx
┃ ┗ 📂TimePicker
┃ ┃ ┗ 📜TimePicker.jsx
┣ 📂constants
┃ ┣ 📜images.js
┃ ┗ 📜index.js
┣ 📂data
┃ ┣ 📜backgroundColor.js
┃ ┣ 📜benefits.json
┃ ┣ 📜calenderData.js
┃ ┣ 📜menu.jsx
┃ ┣ 📜pricing.json
┃ ┣ 📜review.json
┃ ┗ 📜taskStatus.js
┣ 📂hooks
┃ ┣ 📜useAuthCheck.js
┃ ┣ 📜useCurrentDMY.js
┃ ┣ 📜useDisplay.js
┃ ┣ 📜useFaviconSet.js
┃ ┣ 📜useOutsideClick.js
┃ ┗ 📜useTitleSet.js
┣ 📂layouts
┃ ┣ 📜AppWrapper.jsx
┃ ┗ 📜MainWrapper.jsx
┣ 📂pages
┃ ┣ 📂auth
┃ ┃ ┣ 📜ForgetPassword.jsx
┃ ┃ ┣ 📜Form.jsx
┃ ┃ ┣ 📜InputField.jsx
┃ ┃ ┣ 📜Login.jsx
┃ ┃ ┣ 📜Register.jsx
┃ ┃ ┗ 📜RegisterSuccessMessage.jsx
┃ ┣ 📂dashboard
┃ ┃ ┣ 📂addSleipner
┃ ┃ ┃ ┣ 📜AddSleipner.jsx
┃ ┃ ┃ ┗ 📜SingleSearchResult.jsx
┃ ┃ ┣ 📂inviteSend
┃ ┃ ┃ ┣ 📜AddedEmailList.jsx
┃ ┃ ┃ ┣ 📜AddSingleEmail.jsx
┃ ┃ ┃ ┗ 📜InviteSend.jsx
┃ ┃ ┣ 📜Activates.jsx
┃ ┃ ┣ 📜Dashboard.jsx
┃ ┃ ┣ 📜DashBoardHeader.jsx
┃ ┃ ┣ 📜GridGroup.jsx
┃ ┃ ┣ 📜SingleActivate.jsx
┃ ┃ ┗ 📜ToDayEvents.jsx
┃ ┣ 📂document
┃ ┃ ┗ 📜Document.jsx
┃ ┣ 📂event
┃ ┃ ┣ 📂addevent
┃ ┃ ┃ ┣ 📜CreateEvent.jsx
┃ ┃ ┃ ┣ 📜SelectDate.jsx
┃ ┃ ┃ ┣ 📜SelectTime.jsx
┃ ┃ ┃ ┗ 📜UpdateEvent.jsx
┃ ┃ ┣ 📂calendar
┃ ┃ ┃ ┣ 📜BigCalendar.jsx
┃ ┃ ┃ ┣ 📜BigShowMonth.jsx
┃ ┃ ┃ ┣ 📜BigSingleDate.jsx
┃ ┃ ┃ ┣ 📜Calendar.jsx
┃ ┃ ┃ ┣ 📜ShowMonth.jsx
┃ ┃ ┃ ┣ 📜SingleDate.jsx
┃ ┃ ┃ ┗ 📜SingleDay.jsx
┃ ┃ ┣ 📜Event.jsx
┃ ┃ ┣ 📜EventGroup.jsx
┃ ┃ ┣ 📜EventHeader.jsx
┃ ┃ ┗ 📜ShowAllDateEvent.jsx
┃ ┣ 📂features
┃ ┃ ┗ 📜Features.jsx
┃ ┣ 📂home
┃ ┃ ┣ 📜Benefits.jsx
┃ ┃ ┣ 📜HeroSection.jsx
┃ ┃ ┣ 📜Home.jsx
┃ ┃ ┗ 📜Reviews.jsx
┃ ┣ 📂notfound
┃ ┃ ┗ 📜NotFound.jsx
┃ ┣ 📂pricing
┃ ┃ ┗ 📜Pricing.jsx
┃ ┣ 📂setting
┃ ┃ ┣ 📜ChangeEmail.jsx
┃ ┃ ┣ 📜ChangeName.jsx
┃ ┃ ┣ 📜ChangePassword.jsx
┃ ┃ ┣ 📜Item.jsx
┃ ┃ ┣ 📜ProfilePicture.jsx
┃ ┃ ┗ 📜Setting.jsx
┃ ┣ 📂task
┃ ┃ ┣ 📂addtask
┃ ┃ ┃ ┣ 📜CreatedDate.jsx
┃ ┃ ┃ ┣ 📜CreateTask.jsx
┃ ┃ ┃ ┣ 📜StatusSet.jsx
┃ ┃ ┃ ┗ 📜TagsSet.jsx
┃ ┃ ┣ 📜FilterTasks.jsx
┃ ┃ ┣ 📜SingleTask.jsx
┃ ┃ ┣ 📜TaskGroup.jsx
┃ ┃ ┣ 📜Tasks.jsx
┃ ┃ ┣ 📜TaskSelector.jsx
┃ ┃ ┗ 📜TaskStatusChange.jsx
┃ ┗ 📂verify
┃ ┃ ┗ 📜VerifySuccess.jsx
┣ 📂routes
┃ ┣ 📜index.jsx
┃ ┣ 📜PrivateRoute.jsx
┃ ┗ 📜PublicRoute.jsx
┣ 📂services
┃ ┣ 📂activates
┃ ┃ ┣ 📜activateApi.js
┃ ┃ ┣ 📜activateSelector.js
┃ ┃ ┗ 📜activateSlice.js
┃ ┣ 📂api
┃ ┃ ┗ 📜api.js
┃ ┣ 📂auth
┃ ┃ ┣ 📜authApi.js
┃ ┃ ┣ 📜authSelector.js
┃ ┃ ┗ 📜authSlice.js
┃ ┣ 📂event
┃ ┃ ┣ 📜eventApi.js
┃ ┃ ┣ 📜eventSelector.js
┃ ┃ ┗ 📜eventSlice.js
┃ ┣ 📂inviteSleipner
┃ ┃ ┗ 📜inviteApi.js
┃ ┣ 📂task
┃ ┃ ┣ 📜taskApi.js
┃ ┃ ┣ 📜taskSelector.js
┃ ┃ ┗ 📜taskSlice.js
┃ ┗ 📂user
┃ ┃ ┣ 📜userApi.js
┃ ┃ ┣ 📜userSelector.js
┃ ┃ ┗ 📜userSlice.js
┣ 📂utils
┃ ┣ 📜authInputValidator.js
┃ ┣ 📜convertISOToCustomFormat.js
┃ ┣ 📜createArrayUpToNumber.js
┃ ┣ 📜findEventsByDate.js
┃ ┣ 📜formatDateToYYYYMMDD.js
┃ ┣ 📜isValidEmail.js
┃ ┗ 📜selectStatusBgColor.js
┣ 📜index.css
┗ 📜main.jsx
```

## Screenshots

![App Screenshot](https://i.ibb.co/NpL63Ld/screencapture-protesk-netlify-app-2024-03-20-23-34-45.png)
![App Screenshot](https://i.ibb.co/HxqL2wD/Screenshot-2024-03-20-235021.png)
![App Screenshot](https://i.ibb.co/9NzcLcW/Screenshot-2024-03-20-235124.png)
![App Screenshot](https://i.ibb.co/c183ZTS/Screenshot-2024-03-20-235101.png)
![App Screenshot](https://i.ibb.co/QDpRN6L/Screenshot-2024-03-20-235140.png)
![App Screenshot](https://i.ibb.co/Tws6jVJ/Screenshot-2024-03-20-235156.png)
![App Screenshot](https://i.ibb.co/fxgN7Y2/Screenshot-2024-03-20-235458.png)
![App Screenshot](https://i.ibb.co/vD09vpZ/Screenshot-2024-03-20-235444.png)
![App Screenshot](https://i.ibb.co/dQ3hqwG/Screenshot-2024-03-20-235226.png)
![App Screenshot](https://i.ibb.co/nsVJ43b/Screenshot-2024-03-20-235214.png)
![App Screenshot](https://i.ibb.co/6FHgfdd/Screenshot-2024-03-20-235515.png)
