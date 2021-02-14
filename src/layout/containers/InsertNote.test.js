import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import InsertNote from './InsertNote';

const sampleText = 'Just a test';

test('On first render, elements should only have default value', () => {
    const addNoteMock = jest.fn();
    render(<InsertNote addNoteCb={addNoteMock} />);
    const textarea = screen.getByRole('textbox');
    const button = screen.getByRole('button');
    expect(textarea).toBeInTheDocument();
    expect(button).toHaveTextContent('Publish');
    expect(button).toBeDisabled();
});

test('Button is enabled after typing some text', () => {
    const addNoteMock = jest.fn();
    render(<InsertNote addNoteCb={addNoteMock} />);
    const textarea = screen.getByRole('textbox');
    const button = screen.getByRole('button');
    userEvent.paste(textarea, sampleText);
    expect(textarea).toHaveTextContent(sampleText);
    expect(button).toBeEnabled();
});

test('Submit on Enter key press', () => {
    const addNoteMock = jest.fn();
    render(<InsertNote addNoteCb={addNoteMock} />);
    const textarea = screen.getByRole('textbox');
    userEvent.paste(textarea, sampleText);
    fireEvent.keyDown(textarea, { key: 'Enter', code: 'Enter' });
    expect(addNoteMock).toHaveBeenCalled();
    expect(addNoteMock.mock.calls[0][0].content).toBe(sampleText);
});

test('Submit on button click', () => {
    const addNoteMock = jest.fn();
    render(<InsertNote addNoteCb={addNoteMock} />);
    const textarea = screen.getByRole('textbox');
    const button = screen.getByRole('button');
    userEvent.paste(textarea, sampleText);
    userEvent.click(button);
    expect(addNoteMock).toHaveBeenCalled();
    expect(addNoteMock.mock.calls[0][0].content).toBe(sampleText);
});

test('Textarea is cleared after submit', () => {
    const addNoteMock = jest.fn();
    render(<InsertNote addNoteCb={addNoteMock} />);
    const textarea = screen.getByRole('textbox');
    const button = screen.getByRole('button');
    userEvent.paste(textarea, sampleText);
    expect(textarea).toHaveTextContent(sampleText);
    userEvent.click(button);
    expect(textarea).toHaveTextContent('');
});
