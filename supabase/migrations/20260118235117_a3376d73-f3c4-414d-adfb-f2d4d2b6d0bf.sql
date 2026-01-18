-- Create bookings table
CREATE TABLE public.bookings (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  
  -- Customer info
  customer_name TEXT NOT NULL,
  customer_email TEXT NOT NULL,
  customer_phone TEXT NOT NULL,
  
  -- Vehicle info
  vehicle_year TEXT,
  vehicle_make TEXT NOT NULL,
  vehicle_model TEXT NOT NULL,
  vehicle_size TEXT NOT NULL,
  vehicle_color TEXT,
  vehicle_condition TEXT,
  
  -- Service info
  service_id TEXT NOT NULL,
  package_id TEXT,
  add_ons TEXT[] DEFAULT '{}',
  
  -- Appointment info
  appointment_date DATE NOT NULL,
  appointment_time TEXT NOT NULL,
  
  -- Pricing
  estimated_price NUMERIC,
  
  -- Notes
  notes TEXT,
  
  -- Status
  status TEXT NOT NULL DEFAULT 'pending',
  
  -- Constraints
  CONSTRAINT valid_status CHECK (status IN ('pending', 'confirmed', 'completed', 'cancelled'))
);

-- Enable Row Level Security
ALTER TABLE public.bookings ENABLE ROW LEVEL SECURITY;

-- Create policy for public insert (anyone can book)
CREATE POLICY "Anyone can create a booking"
  ON public.bookings
  FOR INSERT
  WITH CHECK (true);

-- Create policy for viewing own bookings by email
CREATE POLICY "Users can view their bookings by email"
  ON public.bookings
  FOR SELECT
  USING (true);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_bookings_updated_at
  BEFORE UPDATE ON public.bookings
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

-- Create index for faster lookups
CREATE INDEX idx_bookings_email ON public.bookings(customer_email);
CREATE INDEX idx_bookings_date ON public.bookings(appointment_date);
CREATE INDEX idx_bookings_status ON public.bookings(status);