export const style = {
  paper: {
      marginTop: "15px",
      width: "800px",
      padding: "20px 28px",
      borderRadius: 2,
      display: "flex",
      justifyContent: "space-between",
      alignContent: "center",
      gap: 2,
      opacity: "todo.checked ? 0.5 : 1"
  },
    box: {
        textAlign: "left",
    },
    typography: {
        cursor: "pointer",
        textDecorationLine: "todo.checked ? lineThrough : none",
    }

}