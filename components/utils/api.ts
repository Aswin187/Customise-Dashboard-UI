export const fetchWidgetPreferences = async () => {
    const response = await fetch(`${process.env.API_BASE_URL}/api/widgets`);
    if (!response.ok) throw new Error('Failed to fetch widget preferences');
    return response.json();
  };
  
  export const updateWidgetVisibility = async (id: number, isVisible: boolean) => {
    await fetch(`${process.env.API_BASE_URL}/api/widgets`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id, isVisible }),
    });
  };
  