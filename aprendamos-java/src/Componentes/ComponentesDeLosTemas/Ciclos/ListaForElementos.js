import { Box, Button, Paper, Step, StepContent, StepLabel, Stepper, Typography } from "@mui/material";
import { useState } from "react";
function Instrucciones({steps}) {
    const [activeStep, setActiveStep] = useState(0);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };
    return (
        <>
            <Stepper activeStep={activeStep} orientation="vertical">
                {steps.map((step, index) => (
                    <Step key={step.label}>
                        <StepLabel StepIconProps={{color:"stratos"}}
                        >
                            {step.label}
                        </StepLabel>
                        <StepContent>
                            <Typography color="regalBlue">{step.description}</Typography>
                            <Box sx={{ mb: 2 }}>
                                <div>
                                    <Button
                                        variant="contained"
                                        color="bondiBlue"
                                        onClick={handleNext}
                                        sx={{ mt: 1, mr: 1 }}
                                    >
                                        {index === steps.length - 1 ? 'Finalizar' : 'Siguiente'}
                                    </Button>
                                    <Button
                                        disabled={index === 0}
                                        onClick={handleBack}
                                        sx={{ mt: 1, mr: 1 }}
                                        color="boticelli"
                                        variant="contained"
                                    >
                                        Atras
                                    </Button>
                                </div>
                            </Box>
                        </StepContent>
                    </Step>
                ))}
            </Stepper>
            {activeStep === steps.length && (
                <div>
                    <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }} color="regalBlue" variant="contained">
                        Ver de nuevo
                    </Button>
                </div>
            )}
        </>
    );
}

export default Instrucciones;