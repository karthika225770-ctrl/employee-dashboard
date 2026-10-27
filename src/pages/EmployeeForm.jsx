function EmployeeForm() {
  return (
    <div>
      <h1>Employee Form</h1>

      <form>
        <input type="text" placeholder="Name" />
        <br /><br />

        <input type="text" placeholder="Designation" />
        <br /><br />

        <input type="text" placeholder="Location" />
        <br /><br />

        <input type="number" placeholder="Salary" />
        <br /><br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default EmployeeForm;