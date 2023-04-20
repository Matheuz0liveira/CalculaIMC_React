const CalculadoraImc = ({peso, altura, setImc}) => {
    const newImc = peso / (altura*altura);
    setImc(newImc);
}


export default CalculadoraImc;