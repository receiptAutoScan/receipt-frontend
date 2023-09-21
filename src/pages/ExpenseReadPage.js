import ChatbotComponent from "../components/ChatbotComponent";
import ExpenseList from "../components/expense/ExpenseList";

console.log("ExpenseReadPage.js");

export default function ExpenseReadPage() {
    return (
        <>
            <h1>지출내역</h1>
            <ExpenseList/>
            <ChatbotComponent/>
        </>
    )
}