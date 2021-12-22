import { fireEvent,act, screen, cleanup,  render, getByText } from '@testing-library/react';
import Reservation from './Reservation';
import React from 'react'



afterEach(cleanup)

describe("Input Component", ()=> {

    it("full name renders", ()=> {
        const { getByTestId } = render(<Reservation/>) 
        
        expect(getByTestId("testFullName")).toBeTruthy()
    })
    it("contact number renders", ()=> {
        const { getByTestId } = render(<Reservation/>) 
        
        expect(getByTestId("testContactNumber")).toBeTruthy()
    })
    it("email address renders", ()=> {
        const { getByTestId } = render(<Reservation/>) 
        
        expect(getByTestId("testEmail")).toBeTruthy()
    })
    it("num guests renders", ()=> {
        const { getByTestId } = render(<Reservation/>) 
        
        expect(getByTestId("testGuests")).toBeTruthy()
    })
    it("date renders", ()=> {
        const { getByTestId } = render(<Reservation/>) 
        
        expect(getByTestId("testResDate")).toBeTruthy()
    })
    it("time renders", ()=> {
        const { getByTestId } = render(<Reservation/>) 
        
        expect(getByTestId("testSelectList")).toBeTruthy()
    })
    it("full name updates on change", () => {
        const{getByTestId} = render(<Reservation />);
        const fullNameInput = getByTestId("testFullName");
        fireEvent.change(fullNameInput, {target: {value: "test"}})
        expect(fullNameInput.value).toBe("test")
    })
    it("number updates on change", () => {
        const{getByTestId} = render(<Reservation />);
        const contactNumberInput = getByTestId("testContactNumber");
        fireEvent.change(contactNumberInput, {target: {value: "1234567891"}})
        expect(contactNumberInput.value).toBe("1234567891")
    })
    it("email updates on change", () => {
        const{getByTestId} = render(<Reservation />);
        const emailInput = getByTestId("testEmail");
        fireEvent.change(emailInput, {target: {value: "123@123.com"}})
        expect(emailInput.value).toBe("123@123.com")
    })
    it("guests updates on change", () => {
        const{getByTestId} = render(<Reservation />);
        const guestsInput = getByTestId("testGuests");
        fireEvent.change(guestsInput, {target: {value: "4"}})
        expect(guestsInput.value).toBe("4")
    })
    it("date updates on change", () => {
        const{getByTestId} = render(<Reservation />);
        const dateInput = getByTestId("testResDate");
        fireEvent.change(dateInput, {target: {value: "2021-07-04"}})
        expect(dateInput.value).toBe("2021-07-04")
    })

    it("time updates on change", () => {
        const{getByTestId} = render(<Reservation />);
        const resTime = getByTestId("testSelectList");
        fireEvent.change(resTime, {target: {value: "11:30"}})
        expect(resTime.value).toBe("11:30")
    })
    it("CC on change", () => {
        const setPopup3Trigger = jest.fn()
        const{getByTestId} = render(<Reservation setPopup3Trigger={setPopup3Trigger} />);
        const fullNameInput = getByTestId("testFullName");
        const contactNumberInput = getByTestId("testContactNumber");
        const emailInput = getByTestId("testEmail");
        const guestsInput = getByTestId("testGuests");
        const dateInput = getByTestId("testResDate");
        const resTime = getByTestId("testSelectList");        
        fireEvent.change(resTime, {target: {value: "11:30"}})
        fireEvent.change(dateInput, {target: {value: "2021-07-04"}})
        fireEvent.change(emailInput, {target: {value: "123@123.com"}})
        fireEvent.change(contactNumberInput, {target: {value: "1234567891"}})        
        fireEvent.change(guestsInput, {target: {value: "4"}})        
        fireEvent.change(fullNameInput, {target: {value: "test"}})
        fireEvent.click(screen.getByText('Pick a Table'))
        fireEvent.click(screen.getByTestId('testc3'))
        fireEvent.click(screen.getByText("Accept"))
        fireEvent.click(screen.getByText("Submit Reservation"))
        fireEvent.click(screen.getByText("Enter Info"))
       // fireEvent.change(setPopup3Trigger, {target: {value: true}})
        const CC = getByTestId("testCC");
        fireEvent.change(CC, {target: {value: "1234123412341234"}})
        expect(CC.value).toBe("1234123412341234")
    })
    it("CC on change", () => {
        const setPopup3Trigger = jest.fn()
        const{getByTestId} = render(<Reservation setPopup3Trigger={setPopup3Trigger} />);
        const fullNameInput = getByTestId("testFullName");
        const contactNumberInput = getByTestId("testContactNumber");
        const emailInput = getByTestId("testEmail");
        const guestsInput = getByTestId("testGuests");
        const dateInput = getByTestId("testResDate");
        const resTime = getByTestId("testSelectList");        
        fireEvent.change(resTime, {target: {value: "11:30"}})
        fireEvent.change(dateInput, {target: {value: "2021-07-04"}})
        fireEvent.change(emailInput, {target: {value: "123@123.com"}})
        fireEvent.change(contactNumberInput, {target: {value: "1234567891"}})        
        fireEvent.change(guestsInput, {target: {value: "4"}})        
        fireEvent.change(fullNameInput, {target: {value: "test"}})
        fireEvent.click(screen.getByText('Pick a Table'))
        fireEvent.click(screen.getByTestId('testc3'))
        fireEvent.click(screen.getByText("Accept"))
        fireEvent.click(screen.getByText("Submit Reservation"))
        fireEvent.click(screen.getByText("Enter Info"))
       // fireEvent.change(setPopup3Trigger, {target: {value: true}})
        const expDate = getByTestId("testExpDate");
        fireEvent.change(expDate, {target: {value: "122025"}})
        expect(expDate.value).toBe("122025")
    })
    it("exp date on change", () => {
        const setPopup3Trigger = jest.fn()
        const{getByTestId} = render(<Reservation setPopup3Trigger={setPopup3Trigger} />);
        const fullNameInput = getByTestId("testFullName");
        const contactNumberInput = getByTestId("testContactNumber");
        const emailInput = getByTestId("testEmail");
        const guestsInput = getByTestId("testGuests");
        const dateInput = getByTestId("testResDate");
        const resTime = getByTestId("testSelectList");        
        fireEvent.change(resTime, {target: {value: "11:30"}})
        fireEvent.change(dateInput, {target: {value: "2021-07-04"}})
        fireEvent.change(emailInput, {target: {value: "123@123.com"}})
        fireEvent.change(contactNumberInput, {target: {value: "1234567891"}})        
        fireEvent.change(guestsInput, {target: {value: "4"}})        
        fireEvent.change(fullNameInput, {target: {value: "test"}})
        fireEvent.click(screen.getByText('Pick a Table'))
        fireEvent.click(screen.getByTestId('testc3'))
        fireEvent.click(screen.getByText("Accept"))
        fireEvent.click(screen.getByText("Submit Reservation"))
        fireEvent.click(screen.getByText("Enter Info"))
       // fireEvent.change(setPopup3Trigger, {target: {value: true}})
        const expDate = getByTestId("testExpDate");
        fireEvent.change(expDate, {target: {value: "122025"}})
        expect(expDate.value).toBe("122025")
    })
    it("zipCode on change", () => {
        const setPopup3Trigger = jest.fn()
        const{getByTestId} = render(<Reservation setPopup3Trigger={setPopup3Trigger} />);
        const fullNameInput = getByTestId("testFullName");
        const contactNumberInput = getByTestId("testContactNumber");
        const emailInput = getByTestId("testEmail");
        const guestsInput = getByTestId("testGuests");
        const dateInput = getByTestId("testResDate");
        const resTime = getByTestId("testSelectList");        
        fireEvent.change(resTime, {target: {value: "11:30"}})
        fireEvent.change(dateInput, {target: {value: "2021-07-04"}})
        fireEvent.change(emailInput, {target: {value: "123@123.com"}})
        fireEvent.change(contactNumberInput, {target: {value: "1234567891"}})        
        fireEvent.change(guestsInput, {target: {value: "4"}})        
        fireEvent.change(fullNameInput, {target: {value: "test"}})
        fireEvent.click(screen.getByText('Pick a Table'))
        fireEvent.click(screen.getByTestId('testc3'))
        fireEvent.click(screen.getByText("Accept"))
        fireEvent.click(screen.getByText("Submit Reservation"))
        fireEvent.click(screen.getByText("Enter Info"))
       // fireEvent.change(setPopup3Trigger, {target: {value: true}})
        const zipCode = getByTestId("testBillZipCode");
        fireEvent.change(zipCode, {target: {value: "77777"}})
        expect(zipCode.value).toBe("77777")
    })
   
})

describe("Submit Test", () => {
    afterEach(cleanup)


    it("clear form test", () => {
        

        const{getByTestId} = render(<Reservation />);
        const fullNameInput = getByTestId("testFullName");
        const contactNumberInput = getByTestId("testContactNumber");
        const emailInput = getByTestId("testEmail");
        const guestsInput = getByTestId("testGuests");
        const dateInput = getByTestId("testResDate");
        const resTime = getByTestId("testSelectList");        
        fireEvent.change(resTime, {target: {value: "11:30"}})
        fireEvent.change(dateInput, {target: {value: "2021-07-04"}})
        fireEvent.change(emailInput, {target: {value: "123@123.com"}})
        fireEvent.change(contactNumberInput, {target: {value: "1234567891"}})        
        fireEvent.change(guestsInput, {target: {value: "4"}})        
        fireEvent.change(fullNameInput, {target: {value: "test"}})
        fireEvent.click(screen.getByText('Clear Form'))
        expect(fullNameInput.value).toBe('')
        expect(resTime.value).toBe("11:00")
        expect(dateInput.value).toBe("")
        expect(guestsInput.value).toBe("")
        expect(emailInput.value).toBe("")
        expect(contactNumberInput.value).toBe("")
        expect(fullNameInput.value).toBe("")
    })
    it("pick table renders", () => {
        const pickTable = jest.fn();
        const{getByTestId} = render(<Reservation pickTable={pickTable}/>);
        fireEvent.click(screen.getByText('Pick a Table'))
        expect(pickTable).toBeTruthy()


    })

    it("handleSubmit renders", () => {
        const handleSubmit = jest.fn();
        const{getByTestId} = render(<Reservation handleSubmit={handleSubmit}/>);
        expect(handleSubmit).toBeTruthy()

    })
})