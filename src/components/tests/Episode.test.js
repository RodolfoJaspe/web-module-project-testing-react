import React from 'react';
import { render, screen } from '@testing-library/react';
import Episode from './../Episode';

const testEpisode = {
    id:1,
    name: "Chapter One: The Vanishing of Will Byers",
    image: "http://static.tvmaze.com/uploads/images/medium_landscape/67/168918.jpg",
    season: 1,
    number: 1,
    summary: "A young boy mysteriously disappears, and his panicked mother demands that the police find him. Meanwhile, the boy's friends conduct their own search, and meet a mysterious girl in the forest.",
    runtime: 60
}

const testEpisodeWithoutImage = {
    //Add in approprate test data structure here.
    id:1,
    name: "Chapter One: The Vanishing of Will Byers",
    image: null,
    season: 1,
    number: 1,
    summary: "A young boy mysteriously disappears, and his panicked mother demands that the police find him. Meanwhile, the boy's friends conduct their own search, and meet a mysterious girl in the forest.",
    runtime: 60
}

test("renders without error", () => {
    render(<Episode episode={testEpisode} />)
    const season = screen.getByText(/season/i);
    expect(season).toBeInTheDocument();
});

test("renders the summary test passed as prop", ()=>{
    render(<Episode episode={testEpisode} />);
    const summary = screen.getByText(/A young boy mysteriously disappears, and his panicked mother demands that the police find him. Meanwhile, the boy's friends conduct their own search, and meet a mysterious girl in the forest./i);
    expect(summary).toBeVisible();
    expect(summary).not.toBeFalsy();
    expect(summary).toBeInTheDocument();

    const name = screen.getByText(/Chapter One: The Vanishing of Will Byers/i);
    expect(name).toBeInTheDocument();

    const runtime = screen.getByText(/60 minutes/i);
    expect(runtime).toBeTruthy();
});

test("renders default image when image is not defined", ()=>{
    render(<Episode episode={testEpisodeWithoutImage} />);
    const defaultImage = screen.getByAltText(/stranger_things.png/i);
    expect(defaultImage).toBeVisible();
})

//Tasks
//1. Complete a test that shows the Episode component renders. Pass in the provided example episode data as a test prop.
//2. Modify the test data to display a specific summary statement. Complete a test that shows that the summary value passed in to the Episode component displays as expected. Use no more then 3 different expect statements to test the the existance of the summary value.
//3. The episode component displays a default value ('./stranger_things.png') when a image url is not provided. Create a new piece of test data with the image property set to null. Test that the alt tag of the image displayed is set to './stranger_things.png'.