function InputCity({ value, change, submit }) {
  return (
    <>
      <form onSubmit={submit}>
        <input
          type="text"
          value={value}
          onChange={change}
          placeholder="Enter city name"
        />
      </form>
    </>
  );
}

export default InputCity;
