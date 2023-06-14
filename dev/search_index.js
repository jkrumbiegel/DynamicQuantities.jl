var documenterSearchIndex = {"docs":
[{"location":"api/#Usage","page":"API","title":"Usage","text":"","category":"section"},{"location":"api/#Types","page":"API","title":"Types","text":"","category":"section"},{"location":"api/","page":"API","title":"API","text":"Quantity\nDimensions","category":"page"},{"location":"api/#DynamicQuantities.Quantity","page":"API","title":"DynamicQuantities.Quantity","text":"Quantity{T,R}\n\nPhysical quantity with value value of type T and dimensions dimensions of type Dimensions{R}. For example, the velocity of an object with mass 1 kg and velocity 2 m/s is Quantity(2, mass=1, length=1, time=-1). You should access these fields with ustrip(q), and dimensions(q). You can access specific dimensions with ulength(q), umass(q), utime(q), ucurrent(q), utemperature(q), uluminosity(q), and uamount(q).\n\nSeverals operators in Base are extended to work with Quantity objects, including *, +, -, /, abs, ^, sqrt, and cbrt, which manipulate dimensions according to the operation.\n\nFields\n\nvalue::T: value of the quantity of some type T. Access with ustrip(::Quantity)\ndimensions::Dimensions{R}: dimensions of the quantity with dimension type R. Access with dimension(::Quantity)\n\nConstructors\n\nQuantity(x; kws...): Construct a quantity with value x and dimensions given by the keyword arguments. The value type is inferred from x. R is set to DEFAULT_DIM_TYPE.\nQuantity(x, ::Type{R}; kws...): Construct a quantity with value x. The dimensions parametric type is set to R.\nQuantity(x, d::Dimensions{R}): Construct a quantity with value x and dimensions d.\nQuantity{T}(q::Quantity): Construct a quantity with value q.value and dimensions q.dimensions, but with value type converted to T.\nQuantity{T,R}(q::Quantity): Construct a quantity with value q.value and dimensions q.dimensions, but with value type converted to T and dimensions parametric type set to R.\n\n\n\n\n\n","category":"type"},{"location":"api/#DynamicQuantities.Dimensions","page":"API","title":"DynamicQuantities.Dimensions","text":"Dimensions{R}\n\nA type representing the dimensions of a quantity, with each field giving the power of the corresponding dimension. For example, the dimensions of velocity are Dimensions(length=1, time=-1). Each of the 7 dimensions are stored using the type R, which is by default a rational number.\n\nFields\n\nlength: length dimension (i.e., meters^(length))\nmass: mass dimension (i.e., kg^(mass))\ntime: time dimension (i.e., s^(time))\ncurrent: current dimension (i.e., A^(current))\ntemperature: temperature dimension (i.e., K^(temperature))\nluminosity: luminosity dimension (i.e., cd^(luminosity))\namount: amount dimension (i.e., mol^(amount))\n\nConstructors\n\nDimensions(args...): Pass all the dimensions as arguments. R is set to DEFAULT_DIM_TYPE.\nDimensions(; kws...): Pass a subset of dimensions as keyword arguments. R is set to DEFAULT_DIM_TYPE.\nDimensions(::Type{R}; kws...) or Dimensions{R}(; kws...): Pass a subset of dimensions as keyword arguments, with the output type set to Dimensions{R}.\nDimensions{R}(args...): Pass all the dimensions as arguments, with the output type set to Dimensions{R}.\nDimensions{R}(d::Dimensions): Copy the dimensions from another Dimensions object, with the output type set to Dimensions{R}.\n\n\n\n\n\n","category":"type"},{"location":"api/#Utilities","page":"API","title":"Utilities","text":"","category":"section"},{"location":"api/","page":"API","title":"API","text":"The two main general utilities for working with quantities are ustrip and dimension:","category":"page"},{"location":"api/","page":"API","title":"API","text":"ustrip\ndimension","category":"page"},{"location":"api/#DynamicQuantities.ustrip","page":"API","title":"DynamicQuantities.ustrip","text":"ustrip(q::Quantity)\n\nRemove the units from a quantity.\n\n\n\n\n\n","category":"function"},{"location":"api/#DynamicQuantities.dimension","page":"API","title":"DynamicQuantities.dimension","text":"dimension(q::Quantity)\n\nGet the dimensions of a quantity, returning a Dimensions object.\n\n\n\n\n\n","category":"function"},{"location":"api/#Accessing-dimensions","page":"API","title":"Accessing dimensions","text":"","category":"section"},{"location":"api/","page":"API","title":"API","text":"Utility functions to extract specific dimensions are as follows:","category":"page"},{"location":"api/","page":"API","title":"API","text":"ulength\numass\nutime\nucurrent\nutemperature\nuluminosity\nuamount","category":"page"},{"location":"api/#DynamicQuantities.ulength","page":"API","title":"DynamicQuantities.ulength","text":"ulength(q::Quantity)\nulength(d::Dimensions)\n\nGet the length dimension of a quantity (e.g., meters^(ulength)).\n\n\n\n\n\n","category":"function"},{"location":"api/#DynamicQuantities.umass","page":"API","title":"DynamicQuantities.umass","text":"umass(q::Quantity)\numass(d::Dimensions)\n\nGet the mass dimension of a quantity (e.g., kg^(umass)).\n\n\n\n\n\n","category":"function"},{"location":"api/#DynamicQuantities.utime","page":"API","title":"DynamicQuantities.utime","text":"utime(q::Quantity)\nutime(d::Dimensions)\n\nGet the time dimension of a quantity (e.g., s^(utime))\n\n\n\n\n\n","category":"function"},{"location":"api/#DynamicQuantities.ucurrent","page":"API","title":"DynamicQuantities.ucurrent","text":"ucurrent(q::Quantity)\nucurrent(d::Dimensions)\n\nGet the current dimension of a quantity (e.g., A^(ucurrent)).\n\n\n\n\n\n","category":"function"},{"location":"api/#DynamicQuantities.utemperature","page":"API","title":"DynamicQuantities.utemperature","text":"utemperature(q::Quantity)\nutemperature(d::Dimensions)\n\nGet the temperature dimension of a quantity (e.g., K^(utemperature)).\n\n\n\n\n\n","category":"function"},{"location":"api/#DynamicQuantities.uluminosity","page":"API","title":"DynamicQuantities.uluminosity","text":"uluminosity(q::Quantity)\nuluminosity(d::Dimensions)\n\nGet the luminosity dimension of a quantity (e.g., cd^(uluminosity)).\n\n\n\n\n\n","category":"function"},{"location":"api/#DynamicQuantities.uamount","page":"API","title":"DynamicQuantities.uamount","text":"uamount(q::Quantity)\nuamount(d::Dimensions)\n\nGet the amount dimension of a quantity (e.g., mol^(uamount)).\n\n\n\n\n\n","category":"function"},{"location":"api/","page":"API","title":"API","text":"Modules = [DynamicQuantities]\nPages   = [\"utils.jl\"]\nFilter  = t -> !(t in [ustrip, dimension, ulength, umass, utime, ucurrent, utemperature, uluminosity, uamount])","category":"page"},{"location":"api/#Units","page":"API","title":"Units","text":"","category":"section"},{"location":"api/","page":"API","title":"API","text":"The two main functions for working with units are uparse and u_str:","category":"page"},{"location":"api/","page":"API","title":"API","text":"@u_str\nuparse","category":"page"},{"location":"api/#DynamicQuantities.Units.@u_str","page":"API","title":"DynamicQuantities.Units.@u_str","text":"u\"[unit expression]\"\n\nParse a string containing an expression of units and return the corresponding Quantity object with Float64 value. For example, u\"km/s^2\" would be parsed to Quantity(1000.0, length=1, time=-2).\n\n\n\n\n\n","category":"macro"},{"location":"api/#DynamicQuantities.Units.uparse","page":"API","title":"DynamicQuantities.Units.uparse","text":"uparse(s::AbstractString)\n\nParse a string containing an expression of units and return the corresponding Quantity object with Float64 value. For example, uparse(\"m/s\") would be parsed to Quantity(1.0, length=1, time=-1).\n\n\n\n\n\n","category":"function"},{"location":"api/#Available-units","page":"API","title":"Available units","text":"","category":"section"},{"location":"api/","page":"API","title":"API","text":"The base SI units are as follows. Instead of calling directly, it is recommended to access them via the @u_str macro, which evaluates the expression in a namespace with all the units available.","category":"page"},{"location":"api/","page":"API","title":"API","text":"Units.m\nUnits.g\nUnits.s\nUnits.A\nUnits.K\nUnits.cd\nUnits.mol","category":"page"},{"location":"api/#DynamicQuantities.Units.m","page":"API","title":"DynamicQuantities.Units.m","text":"Length in meters. Available variants: fm, pm, nm, μm (/um), cm, dm, mm, km, Mm, Gm.\n\n\n\n\n\n","category":"constant"},{"location":"api/#DynamicQuantities.Units.g","page":"API","title":"DynamicQuantities.Units.g","text":"Mass in grams. Available variants: μg (/ug), mg, kg.\n\n\n\n\n\n","category":"constant"},{"location":"api/#DynamicQuantities.Units.s","page":"API","title":"DynamicQuantities.Units.s","text":"Time in seconds. Available variants: fs, ps, ns, μs (/us), ms, min, h (/hr), day, yr, kyr, Myr, Gyr.\n\n\n\n\n\n","category":"constant"},{"location":"api/#DynamicQuantities.Units.A","page":"API","title":"DynamicQuantities.Units.A","text":"Current in Amperes. Available variants: nA, μA (/uA), mA, kA.\n\n\n\n\n\n","category":"constant"},{"location":"api/#DynamicQuantities.Units.K","page":"API","title":"DynamicQuantities.Units.K","text":"Temperature in Kelvin. Available variant: mK.\n\n\n\n\n\n","category":"constant"},{"location":"api/#DynamicQuantities.Units.cd","page":"API","title":"DynamicQuantities.Units.cd","text":"Luminosity in candela. Available variant: mcd.\n\n\n\n\n\n","category":"constant"},{"location":"api/#DynamicQuantities.Units.mol","page":"API","title":"DynamicQuantities.Units.mol","text":"Amount in moles. Available variant: mmol.\n\n\n\n\n\n","category":"constant"},{"location":"api/","page":"API","title":"API","text":"Several derived SI units are available as well:","category":"page"},{"location":"api/","page":"API","title":"API","text":"Units.Hz\nUnits.N\nUnits.Pa\nUnits.J\nUnits.W\nUnits.C\nUnits.V\nUnits.F\nUnits.Ω\nUnits.T\nUnits.L\nUnits.bar","category":"page"},{"location":"api/#DynamicQuantities.Units.Hz","page":"API","title":"DynamicQuantities.Units.Hz","text":"Frequency in Hertz. Available variants: kHz, MHz, GHz.\n\n\n\n\n\n","category":"constant"},{"location":"api/#DynamicQuantities.Units.N","page":"API","title":"DynamicQuantities.Units.N","text":"Force in Newtons.\n\n\n\n\n\n","category":"constant"},{"location":"api/#DynamicQuantities.Units.Pa","page":"API","title":"DynamicQuantities.Units.Pa","text":"Pressure in Pascals. Available variant: kPa.\n\n\n\n\n\n","category":"constant"},{"location":"api/#DynamicQuantities.Units.J","page":"API","title":"DynamicQuantities.Units.J","text":"Energy in Joules. Available variant: kJ.\n\n\n\n\n\n","category":"constant"},{"location":"api/#DynamicQuantities.Units.W","page":"API","title":"DynamicQuantities.Units.W","text":"Power in Watts. Available variants: kW, MW, GW.\n\n\n\n\n\n","category":"constant"},{"location":"api/#DynamicQuantities.Units.C","page":"API","title":"DynamicQuantities.Units.C","text":"Charge in Coulombs.\n\n\n\n\n\n","category":"constant"},{"location":"api/#DynamicQuantities.Units.V","page":"API","title":"DynamicQuantities.Units.V","text":"Voltage in Volts. Available variants: kV, MV, GV.\n\n\n\n\n\n","category":"constant"},{"location":"api/#DynamicQuantities.Units.F","page":"API","title":"DynamicQuantities.Units.F","text":"Capacitance in Farads.\n\n\n\n\n\n","category":"constant"},{"location":"api/#DynamicQuantities.Units.Ω","page":"API","title":"DynamicQuantities.Units.Ω","text":"Resistance in Ohms. Available variant: mΩ. Also available is ASCII ohm (with variant mohm).\n\n\n\n\n\n","category":"constant"},{"location":"api/#DynamicQuantities.Units.T","page":"API","title":"DynamicQuantities.Units.T","text":"Magnetic flux density in Teslas.\n\n\n\n\n\n","category":"constant"},{"location":"api/#DynamicQuantities.Units.L","page":"API","title":"DynamicQuantities.Units.L","text":"Volume in liters. Available variants: mL, dL.\n\n\n\n\n\n","category":"constant"},{"location":"api/#DynamicQuantities.Units.bar","page":"API","title":"DynamicQuantities.Units.bar","text":"Pressure in bars.\n\n\n\n\n\n","category":"constant"},{"location":"api/#Internals","page":"API","title":"Internals","text":"","category":"section"},{"location":"api/#FixedRational","page":"API","title":"FixedRational","text":"","category":"section"},{"location":"api/","page":"API","title":"API","text":"DynamicQuantities.FixedRational\nDynamicQuantities.denom","category":"page"},{"location":"api/#DynamicQuantities.FixedRational","page":"API","title":"DynamicQuantities.FixedRational","text":"FixedRational{T,den}\n\nA rational number with a fixed denominator. Significantly faster than Rational{T}, as it never needs to compute the gcd apart from when printing. Access the denominator with denom(F) (which converts to T).\n\nFields\n\nnum: numerator of type T. The denominator is fixed to the type parameter den.\n\n\n\n\n\n","category":"type"},{"location":"api/#DynamicQuantities.denom","page":"API","title":"DynamicQuantities.denom","text":"denom(F::FixedRational)\n\nSince den can be a different type than T, this function is used to get the denominator as a T.\n\n\n\n\n\n","category":"function"},{"location":"","page":"Home","title":"Home","text":"(Image: logo)","category":"page"},{"location":"","page":"Home","title":"Home","text":"(Image: Dev) (Image: Build Status) (Image: Coverage)","category":"page"},{"location":"","page":"Home","title":"Home","text":"DynamicQuantities defines a simple statically-typed Quantity type for Julia. Physical dimensions are stored as a value, as opposed to a parametric type, as in Unitful.jl. This is done to allow for calculations where physical dimensions are not known at compile time.","category":"page"},{"location":"","page":"Home","title":"Home","text":"Performance\nUsage\nTypes\nVectors","category":"page"},{"location":"#Performance","page":"Home","title":"Performance","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"DynamicQuantities can greatly outperform Unitful when the compiler cannot infer dimensions in a function:","category":"page"},{"location":"","page":"Home","title":"Home","text":"julia> using BenchmarkTools, DynamicQuantities; import Unitful\n\njulia> dyn_uni = 0.2u\"m^0.5 * kg * mol^3\"\n0.2 m¹ᐟ² kg mol³\n\njulia> unitful = convert(Unitful.Quantity, dyn_uni)\n0.2 kg m¹ᐟ² mol³\n\njulia> f(x, i) = x ^ i * 0.3;\n\njulia> @btime f($dyn_uni, 1);\n  8.759 ns (0 allocations: 0 bytes)\n\njulia> @btime f($unitful, 1);\n  30.083 μs (42 allocations: 1.91 KiB)","category":"page"},{"location":"","page":"Home","title":"Home","text":"(Note the μ and n.) Here, the DynamicQuantities quantity object allows the compiler to build a function that is type stable, while the Unitful quantity object, which stores its dimensions in the type, requires type inference at runtime.","category":"page"},{"location":"","page":"Home","title":"Home","text":"However, if the dimensions in your function can be inferred by the compiler, then you can get better speeds with Unitful:","category":"page"},{"location":"","page":"Home","title":"Home","text":"julia> g(x) = x ^ 2 * 0.3;\n\njulia> @btime g($dyn_uni);\n  10.051 ns (0 allocations: 0 bytes)\n\njulia> @btime g($unitful);\n  2.000 ns (0 allocations: 0 bytes)","category":"page"},{"location":"","page":"Home","title":"Home","text":"While both of these are type stable, because Unitful parametrizes the type on the dimensions, functions can specialize to units and the compiler can optimize away units from the code.","category":"page"},{"location":"#Usage","page":"Home","title":"Usage","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"You can create a Quantity object  by using the convenience macro u\"...\":","category":"page"},{"location":"","page":"Home","title":"Home","text":"julia> x = 0.3u\"km/s\"\n300.0 m s⁻¹\n\njulia> y = 42 * u\"kg\"\n42.0 kg\n\njulia> room_temp = 100u\"kPa\"\n100000.0 m⁻¹ kg s⁻²","category":"page"},{"location":"","page":"Home","title":"Home","text":"This supports a wide range of SI base and derived units, with common prefixes.","category":"page"},{"location":"","page":"Home","title":"Home","text":"You can also construct values explicitly with the Quantity type, with a value and keyword arguments for the powers of the physical dimensions (mass, length, time, current, temperature, luminosity, amount):","category":"page"},{"location":"","page":"Home","title":"Home","text":"julia> x = Quantity(300.0, length=1, time=-1)\n300.0 m s⁻¹","category":"page"},{"location":"","page":"Home","title":"Home","text":"Elementary calculations with +, -, *, /, ^, sqrt, cbrt, abs are supported:","category":"page"},{"location":"","page":"Home","title":"Home","text":"julia> x * y\n12600.0 m kg s⁻¹\n\njulia> x / y\n7.142857142857143 m kg⁻¹ s⁻¹\n\njulia> x ^ 3\n2.7e7 m³ s⁻³\n\njulia> x ^ -1\n0.0033333333333333335 m⁻¹ s\n\njulia> sqrt(x)\n17.320508075688775 m¹ᐟ² s⁻¹ᐟ²\n\njulia> x ^ 1.5\n5196.152422706632 m³ᐟ² s⁻³ᐟ²","category":"page"},{"location":"","page":"Home","title":"Home","text":"Each of these values has the same type, which means we don't need to perform type inference at runtime.","category":"page"},{"location":"","page":"Home","title":"Home","text":"Furthermore, we can do dimensional analysis by detecting DimensionError:","category":"page"},{"location":"","page":"Home","title":"Home","text":"julia> x + 3 * x\n1.2 m¹ᐟ² kg\n\njulia> x + y\nERROR: DimensionError: 0.3 m¹ᐟ² kg and 10.2 kg² s⁻² have incompatible dimensions","category":"page"},{"location":"","page":"Home","title":"Home","text":"The dimensions of a Quantity can be accessed either with dimension(quantity) for the entire Dimensions object:","category":"page"},{"location":"","page":"Home","title":"Home","text":"julia> dimension(x)\nm¹ᐟ² kg","category":"page"},{"location":"","page":"Home","title":"Home","text":"or with umass, ulength, etc., for the various dimensions:","category":"page"},{"location":"","page":"Home","title":"Home","text":"julia> umass(x)\n1//1\n\njulia> ulength(x)\n1//2","category":"page"},{"location":"","page":"Home","title":"Home","text":"Finally, you can strip units with ustrip:","category":"page"},{"location":"","page":"Home","title":"Home","text":"julia> ustrip(x)\n0.2","category":"page"},{"location":"#Unitful","page":"Home","title":"Unitful","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"DynamicQuantities works with quantities that are exclusively represented by their SI base units. This gives us type stability and greatly improves performance.","category":"page"},{"location":"","page":"Home","title":"Home","text":"However, performing calculations with physical dimensions is actually equivalent to working with a standardized unit system. Thus, you can use Unitful to parse units, and then use the DynamicQuantities->Unitful extension for conversion:","category":"page"},{"location":"","page":"Home","title":"Home","text":"julia> using Unitful: Unitful, @u_str; import DynamicQuantities\n\njulia> x = 0.5u\"km/s\"\n0.5 km s⁻¹\n\njulia> y = convert(DynamicQuantities.Quantity, x)\n500.0 m s⁻¹\n\njulia> y2 = y^2 * 0.3\n75000.0 m² s⁻²\n\njulia> x2 = convert(Unitful.Quantity, y2)\n75000.0 m² s⁻²\n\njulia> x^2*0.3 == x2\ntrue","category":"page"},{"location":"#Types","page":"Home","title":"Types","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Both a Quantity's values and dimensions are of arbitrary type. By default, dimensions are stored as a DynamicQuantities.FixedRational{Int32,C} object, which represents a rational number with a fixed denominator C. This is much faster than Rational.","category":"page"},{"location":"","page":"Home","title":"Home","text":"julia> typeof(0.5u\"kg\")\nQuantity{Float64, FixedRational{Int32, 25200}","category":"page"},{"location":"","page":"Home","title":"Home","text":"You can change the type of the value field by initializing with a value explicitly of the desired type.","category":"page"},{"location":"","page":"Home","title":"Home","text":"julia> typeof(Quantity(Float16(0.5), mass=1, length=1))\nQuantity{Float16, FixedRational{Int32, 25200}}","category":"page"},{"location":"","page":"Home","title":"Home","text":"or by conversion:","category":"page"},{"location":"","page":"Home","title":"Home","text":"julia> typeof(convert(Quantity{Float16}, 0.5u\"m/s\"))\nQuantity{Float16, DynamicQuantities.FixedRational{Int32, 25200}}","category":"page"},{"location":"","page":"Home","title":"Home","text":"For many applications, FixedRational{Int8,6} will suffice, and can be faster as it means the entire Dimensions struct will fit into 64 bits. You can change the type of the dimensions field by passing the type you wish to use as the second argument to Quantity:","category":"page"},{"location":"","page":"Home","title":"Home","text":"julia> using DynamicQuantities\n\njulia> R8 = DynamicQuantities.FixedRational{Int8,6};\n\njulia> R32 = DynamicQuantities.FixedRational{Int32,2^4 * 3^2 * 5^2 * 7};  # Default\n\njulia> q8 = [Quantity(randn(), R8, length=rand(-2:2)) for i in 1:1000];\n\njulia> q32 = [Quantity(randn(), R32, length=rand(-2:2)) for i in 1:1000];\n\njulia> f(x) = @. x ^ 2 * 0.5;\n\njulia> @btime f($q8);\n  7.750 μs (1 allocation: 15.75 KiB)\n\njulia> @btime f($q32);\n  8.417 μs (2 allocations: 39.11 KiB)","category":"page"},{"location":"#Vectors","page":"Home","title":"Vectors","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"There is not a separate class for vectors, but you can create units like so:","category":"page"},{"location":"","page":"Home","title":"Home","text":"julia> randn(5) .* u\"m/s\"\n5-element Vector{Quantity{Float64, DynamicQuantities.FixedRational{Int32, 25200}}}:\n 1.1762086954956399 m s⁻¹\n 1.320811324040591 m s⁻¹\n 0.6519033652437799 m s⁻¹\n 0.7424822374423569 m s⁻¹\n 0.33536928068133726 m s⁻¹","category":"page"},{"location":"","page":"Home","title":"Home","text":"Because it is type stable, you can have mixed units in a vector too:","category":"page"},{"location":"","page":"Home","title":"Home","text":"julia> v = [Quantity(randn(), mass=rand(0:5), length=rand(0:5)) for _=1:5]\n5-element Vector{Quantity{Float64, DynamicQuantities.FixedRational{Int32, 25200}}}:\n 0.4309293892461158 kg⁵\n 1.415520139801276\n 1.2179414706524276 m³ kg⁴\n -0.18804207255117408 m³ kg⁵\n 0.52123911329638 m³ kg²","category":"page"}]
}
