import {Button, Container} from "reactstrap";

function MainLayout() {
    return (
        <Container>
            <h1>Fluid Grid!</h1>
            <p>
                This is a modified fluid which
                stretches the whole horizontal space.
            </p>
            <Button color="primary">
                Submit
            </Button>
            <Button color="danger">Danger!</Button>
        </Container>
    );
}

export  default MainLayout;