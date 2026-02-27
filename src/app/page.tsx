import { Button } from '@/Components/UI/Button/Button';
import { Row } from '@/Components/UI/Layout';
export default function ThemeDesignPage() {
    return (
        <>
            
            <h1>This is heading 1</h1>
            <h2>This is heading 2</h2>
            <h3>This is heading 3</h3>
            <h4>This is heading 4</h4>
            <h5>This is heading 5</h5>
            <h6>This is heading 6</h6>
            <p>This is an example of a paragraph.</p>
            <label>This is a label. It inherits size and weight from its parent.</label>
            
            <Row as="header" wrap mainAxis="center" crossAxis="center" gap="s" fullWidth>
                <Button variant="solid" icon="check" color="primary">Solid Button</Button>
                <Button variant="solid" icon="check" loading color="primary">Loading Button</Button>
                <Button variant="outline" color="primary">Outline Button</Button>
                <Button variant="ghost" color="primary">Ghost Button</Button>
                <Button variant="destructive" color="primary">Destructive Button</Button>
            </Row>
        </>
    );
}