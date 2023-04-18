const Intro = () => {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        Paul&nbsp;Chen
      </h1>
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
        Welcome to my personal website!
        I'm Paul Chen, a Grade 11 student attending Merivale High School in Ottawa, Canada, and an aspiring software developer.
        I am well-versed in competitive programming and am currently learning web development.
        <br />
        <br />
        Email: <a className="text-blue-500" href="mailto:chenpaul.pc@gmail.com">chenpaul.pc@gmail.com</a>
        <br />
        GitHub: <a className="text-blue-500" href="https://github.com/876pol">https://github.com/876pol</a>
      </h4>
    </section>
  )
}

export default Intro
